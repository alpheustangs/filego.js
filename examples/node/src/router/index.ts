import type { Context } from "hono";

import type { ServiceResponse } from "#/@types/response";

import { Hono } from "hono";

import { serviceCheck } from "#/services/check";
import { serviceMerge } from "#/services/merge";
import { serviceUpload } from "#/services/upload";

const router: Hono = new Hono();

router.get(
    "/",
    (c: Context): Response =>
        c.json({
            success: true,
        }),
);

type ParsedBody = {
    [x: string]: string | File;
};

router.post("/upload", async (c: Context): Promise<Response> => {
    const body: ParsedBody = await c.req.parseBody();

    const response: ServiceResponse = await serviceUpload({
        id: body.id as string,
        index: Number.parseInt(body.index as string),
        blob: body.blob as Blob,
    });

    return c.json(response[1], response[0]);
});

router.post("/check", async (c: Context): Promise<Response> => {
    const body: ParsedBody = await c.req.parseBody();

    const response: ServiceResponse = await serviceCheck({
        id: body.id as string,
        fileSize: Number.parseInt(body.fileSize as string),
        totalChunks: Number.parseInt(body.totalChunks as string),
    });

    return c.json(response[1], response[0]);
});

router.post("/merge", async (c: Context): Promise<Response> => {
    const body: ParsedBody = await c.req.parseBody();

    const response: ServiceResponse = await serviceMerge({
        id: body.id as string,
        name: body.name as string,
    });

    return c.json(response[1], response[0]);
});

export { router };
