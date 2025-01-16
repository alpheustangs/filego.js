import type { MultipartFile, MultipartValue } from "@fastify/multipart";
import type { FastifyReply, FastifyRequest } from "fastify";

import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import * as path from "node:path";

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

        const cacheDir: string = path.join(cacheRoot, id);

        if (!fs.existsSync(cacheDir)) {
            await fsp.mkdir(cacheDir, { recursive: true });
        }

        await fsp.writeFile(path.join(cacheDir, index.toString()), buffer);

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
