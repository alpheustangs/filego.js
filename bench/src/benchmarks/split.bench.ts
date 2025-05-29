import { split } from "@filego/js";
import { split as nodeSplit } from "@filego/node";
import { bench, describe } from "vitest";

import { cacheDir, chunkSize, getFile, inFile } from "#/configs";

describe("Split", (): void => {
    bench("JS", async (): Promise<void> => {
        await split({
            file: await getFile(),
            chunkSize,
        });
    });

    bench("Node", async (): Promise<void> => {
        await nodeSplit({
            inFile,
            outDir: cacheDir,
            chunkSize,
        });
    });
});
