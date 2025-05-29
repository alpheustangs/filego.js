import type { SplitResult } from "@filego/node";

import * as fsp from "node:fs/promises";
import * as path from "node:path";

import { split } from "@filego/node";

const getFile = async (): Promise<Buffer<ArrayBufferLike>> => {
    return await fsp.readFile(
        path.resolve(process.cwd(), "assets", "test.jpg"),
    );
};

const chunkSize: number = 1 * 1024 * 1024;

const preSplit = async (): Promise<SplitResult> => {
    return await split({
        file: await getFile(),
        chunkSize,
    });
};

const inFile: string = path.resolve(process.cwd(), "assets", "test.jpg");
const cacheDir: string = path.resolve(process.cwd(), ".media", "cache");
const outFile: string = path.resolve(
    process.cwd(),
    ".media",
    "output",
    "test.jpg",
);

export { getFile, chunkSize, preSplit, inFile, cacheDir, outFile };
