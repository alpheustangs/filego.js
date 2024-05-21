import type { MultipartValue } from "@fastify/multipart";
import type { FastifyReply, FastifyRequest } from "fastify";

import * as path from "node:path";

import { merge } from "@filego/node";

import { cacheRoot, isDev, uploadRoot } from "#/configs/env";

import { terminal } from "#/utils/terminal";

const mergeFile = async (
    request: FastifyRequest<{
        Body?: {
            id?: MultipartValue;
            name?: MultipartValue;
        };
    }>,
    reply: FastifyReply,
): Promise<FastifyReply> => {
    try {
        if (!request.body || !request.body.id || !request.body.name) {
            return reply.code(400).send({
                status: "error",
                message: "blank",
            });
        }

        const id: string = request.body.id.value as string;
        const name: string = request.body.name.value as string;

        await merge({
            inDir: path.join(cacheRoot, id),
            outFile: path.join(uploadRoot, id, name),
        });

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

export { mergeFile };
