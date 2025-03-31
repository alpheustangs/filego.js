import type { ServiceResponse } from "#/@types/response";

import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import * as path from "node:path";

import { ROOT_CACHE } from "#/configs";

type ServiceUploadInput = {
    id: string;
    index: number;
    blob: Blob;
};

const serviceUpload = async ({
    id,
    index,
    blob,
}: ServiceUploadInput): Promise<ServiceResponse> => {
    try {
        if (
            typeof id !== "string" ||
            typeof index !== "number" ||
            Number.isNaN(index) ||
            !(blob instanceof Blob)
        ) {
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

        const buffer: ArrayBuffer = await blob.arrayBuffer();
        const uint8Array: Uint8Array = new Uint8Array(buffer);

        const cacheDir: string = path.join(ROOT_CACHE, id);

        if (!fs.existsSync(cacheDir)) {
            await fsp.mkdir(cacheDir, { recursive: true });
        }

        await fsp.writeFile(path.join(cacheDir, index.toString()), uint8Array);

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

export type { ServiceUploadInput };
export { serviceUpload };
