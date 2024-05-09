import type { FastifyInstance } from "fastify";

import { checkFile } from "#/controllers/check";
import { mergeFile } from "#/controllers/merge";
import { uploadFile } from "#/controllers/upload";

const route = (server: FastifyInstance): void => {
    // route
    server.post("/upload", uploadFile);

    server.post("/check", checkFile);

    server.post("/merge", mergeFile);
};

export default route;
