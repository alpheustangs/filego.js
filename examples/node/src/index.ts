import type { FastifyCorsOptions } from "@fastify/cors";
import type { FastifyMultipartAttachFieldsToBodyOptions } from "@fastify/multipart";
import type { FastifyInstance } from "fastify";

import FastifyCors from "@fastify/cors";
import FastifyMultipart from "@fastify/multipart";
import Fastify from "fastify";

import { isDev, port } from "#/configs/env";

import route from "#/router";

import { terminal } from "#/utils/terminal";

// listener
(async (): Promise<void> => {
    try {
        const server: FastifyInstance = Fastify();

        // cors
        await server.register(FastifyCors, {
            origin: true,
            methods: ["POST"],
        } as FastifyCorsOptions);

        // media
        await server.register(FastifyMultipart, {
            attachFieldsToBody: true,
        } as FastifyMultipartAttachFieldsToBodyOptions);

        // use router
        route(server);

        // listen
        await server.listen({ host: "0.0.0.0", port: port });
        const msg: string = `Server running on: http://0.0.0.0:${port}`;
        terminal.ready(msg);
    } catch (e: unknown) {
        isDev && terminal.error(e);
        process.exit(1);
    }
})();
