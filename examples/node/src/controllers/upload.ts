import type { MultipartFile, MultipartValue } from "@fastify/multipart";
import type { FastifyReply, FastifyRequest } from "fastify";

import * as path from "node:path";

import * as fse from "fs-extra";

import { cacheRoot, isDev } from "#/configs/env";

import { terminal } from "#/utils/terminal";

const uploadFile = async (
    request: FastifyRequest<{
        Body?: {
            id?: MultipartValue;
            index?: MultipartValue;
            blob?: MultipartFile;
        };
    }>,
    reply: FastifyReply,
): Promise<FastifyReply> => {
    try {
        if (
            !request.body ||
            !request.body.id ||
            !request.body.index ||
            !request.body.blob
        ) {
            return reply.code(400).send({
                status: "error",
                message: "blank",
            });
        }

        const id: string = request.body.id.value as string;
        const index: number = Number.parseInt(
            request.body.index.value as string,
        );
        const buffer: Buffer = await request.body.blob.toBuffer();

        if (Number.isNaN(index)) {
            return reply.code(400).send({
                status: "error",
                message: "invalid",
            });
        }

        await fse.ensureDir(path.join(cacheRoot, id));
        await fse.writeFile(path.join(cacheRoot, id, index.toString()), buffer);

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

export { uploadFile };
