import type { CheckResult } from "@filego/node";

import type { ServiceResponse } from "#/@types/response";

import * as path from "node:path";

import { check } from "@filego/node";

import { cacheRoot } from "#/configs";

type ServiceCheckInput = {
    id: string;
    fileSize: number;
    totalChunks: number;
};

const serviceCheck = async ({
    id,
    fileSize,
    totalChunks,
}: ServiceCheckInput): Promise<ServiceResponse> => {
    try {
        if (
            typeof id !== "string" ||
            typeof fileSize !== "number" ||
            Number.isNaN(fileSize) ||
            typeof totalChunks !== "number" ||
            Number.isNaN(totalChunks)
        ) {
            return [
                400,
                {
                    success: false,
                    error: {
                        code: "invalid",
                        field: "id/fileSize/totalChunks",
                        message: "Invalid input",
                    },
                },
            ];
        }

        const result: CheckResult = await check({
            fileSize,
            totalChunks,
            inDir: path.join(cacheRoot, id),
        });

        if (result.success === false) {
            return [
                400,
                {
                    success: false,
                    ...(result.error.type === "missing"
                        ? {
                              data: {
                                  missing: result.error.missing,
                              },
                          }
                        : {}),
                    error: {
                        code: result.error.type,
                        message: result.error.message,
                    },
                },
            ];
        }

        return [
            200,
            {
                success: true,
            },
        ];
    } catch (er: unknown) {
        return [
            500,
            {
                success: false,
                error: {
                    code: "server",
                    message: "Internal server error",
                },
            },
        ];
    }
};

export type { ServiceCheckInput };
export { serviceCheck };
