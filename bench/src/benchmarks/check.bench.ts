import type { SplitResult } from "@filego/js";
import type { SplitResult as NodeSplitResult } from "@filego/node";

import { check } from "@filego/js";
import { check as nodeCheck } from "@filego/node";
import { bench, describe } from "vitest";

import { cacheDir, preNodeSplit, preSplit } from "#/configs";

describe("Check", async (): Promise<void> => {
    const splitted: SplitResult = await preSplit();
    const nodeSplitted: NodeSplitResult = await preNodeSplit();

    bench("JS", async (): Promise<void> => {
        await check({
            chunks: splitted.chunks,
            fileSize: splitted.fileSize,
            totalChunks: splitted.totalChunks,
        });
    });

    bench("Node", async (): Promise<void> => {
        await nodeCheck({
            inDir: cacheDir,
            fileSize: nodeSplitted.fileSize,
            totalChunks: nodeSplitted.totalChunks,
        });
    });
});
