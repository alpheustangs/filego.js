import type { ServiceResponse } from "#/@types/response";

import * as path from "node:path";

import { merge } from "@filego/node";

import { ROOT_CACHE, ROOT_UPLOAD } from "#/configs";

type ServiceMergeInput = {
    id: string;
    name: string;
};

const serviceMerge = async ({
    id,
    name,
}: ServiceMergeInput): Promise<ServiceResponse> => {
    try {
        if (typeof id !== "string" || typeof name !== "string") {
            return [
                400,
                {
                    success: false,
                    error: {
                        code: "invalid",
                        field: "id/index/blob",
                        message: "Invalid input",
                    },
                },
            ];
        }

        await merge({
            inDir: path.join(ROOT_CACHE, id),
            outFile: path.join(ROOT_UPLOAD, id, name),
        });

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

export type { ServiceMergeInput };
export { serviceMerge };
