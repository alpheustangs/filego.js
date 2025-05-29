import type { SplitResult } from "@filego/node";

import { merge } from "@filego/node";
import { bench, describe } from "vitest";

import { cacheDir, outFile, preSplit } from "#/configs";

describe("Merge", async (): Promise<void> => {
    const splitted: SplitResult = await preSplit();

    bench("JS", async (): Promise<void> => {
        await merge({
            chunks: splitted.chunks,
        });
    });

    bench("Node", async (): Promise<void> => {
        await merge({
            inDir: cacheDir,
            outFile,
        });
    });
});
