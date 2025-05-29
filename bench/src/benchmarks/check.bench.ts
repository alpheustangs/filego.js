import type { SplitResult } from "@filego/node";

import { check } from "@filego/node";
import { bench, describe } from "vitest";

import { cacheDir, preSplit } from "#/configs";

describe("Check", async (): Promise<void> => {
    const splitted: SplitResult = await preSplit();

    bench("JS", async (): Promise<void> => {
        await check({
            chunks: splitted.chunks,
            fileSize: splitted.fileSize,
            totalChunks: splitted.totalChunks,
        });
    });

    bench("Node", async (): Promise<void> => {
        await check({
            inDir: cacheDir,
            fileSize: splitted.fileSize,
            totalChunks: splitted.totalChunks,
        });
    });
});
