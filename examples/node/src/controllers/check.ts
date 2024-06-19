import type { MultipartValue } from "@fastify/multipart";
import type { CheckResult } from "@filego/node";
import type { FastifyReply, FastifyRequest } from "fastify";

import * as path from "node:path";

import { check } from "@filego/node";

import { cacheRoot, isDev } from "#/configs/env";

import { terminal } from "#/utils/terminal";

const checkFile = async (
    request: FastifyRequest<{
        Body?: {
            id?: MultipartValue;
            fileSize?: MultipartValue;
            totalChunks?: MultipartValue;
        };
    }>,
    reply: FastifyReply,
): Promise<FastifyReply> => {
    try {
        if (
            !request.body ||
            !request.body.id ||
            !request.body.fileSize ||
            !request.body.totalChunks
        ) {
            return reply.code(400).send({
                status: "error",
                message: "blank",
            });
        }

        const id: string = request.body.id.value as string;
        const fileSize: number = Number.parseInt(
            request.body.fileSize.value as string,
        );
        const totalChunks: number = Number.parseInt(
            request.body.totalChunks.value as string,
        );

        if (Number.isNaN(fileSize) || Number.isNaN(totalChunks)) {
            return reply.code(400).send({
                status: "error",
                message: "invalid",
            });
        }

        const result: CheckResult = await check({
            fileSize,
            totalChunks,
            inDir: path.join(cacheRoot, id),
        });

        if (result.success === false) {
            return reply.code(400).send({
                status: "error",
                message: result.error,
                data: {
                    ...(result.error.type === "missing"
                        ? {
                              missing: result.error.missing,
                          }
                        : {}),
                },
            });
        }

        return reply.code(200).send({
            status: "success",
        });
    } catch (e: unknown) {
        isDev && terminal.error(e);
        return reply.code(500).send({
            status: "error",
            message: "server",
        });
    }
};

export { checkFile };
