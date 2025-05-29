import type {
    CheckResult as NodeCheckResult,
    SplitIoResult as NodeSplitResult,
} from "@filego/node";

import * as fs from "node:fs";
import * as path from "node:path";

import {
    check as nodeCheck,
    merge as nodeMerge,
    split as nodeSplit,
} from "@filego/node";
import { getMemUsage } from "@test/shared";
import { describe, expect, it } from "vitest";

import { cacheRoot, chunkSize, inFiles, outRoot } from "#/configs/base";

describe("tests for split, check and merge", (): void => {
    for (let i: number = 0; i < inFiles.length; i++) {
        const inFile: string = inFiles[i] as string;
        const file: string = inFile.split("/").pop() ?? "";
        const fileName: string = file.split(".")[0] as string;
        const fileExt: string = file.split(".").pop() ?? "";

        const cacheDir: string = path.resolve(cacheRoot, fileName);
        const outFile: string = path.resolve(
            outRoot,
            `${fileName}-result.${fileExt}`,
        );

        let fileSize: number = 0;
        let totalChunks: number = 0;

        it("should be able to split into chunks", async (): Promise<void> => {
            const result: NodeSplitResult = await nodeSplit({
                inFile: inFile,
                outDir: cacheDir,
                chunkSize,
            });

            getMemUsage({ name: "@filego/node split" });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");
            result.fileSize > 0 &&
                expect(fs.existsSync(path.resolve(cacheDir, `${0}`))).toBe(
                    true,
                );

            fileSize = result.fileSize;
            totalChunks = result.totalChunks;
        });

        it("should not pass the check with error: missing ", async (): Promise<void> => {
            const result: NodeCheckResult = await nodeCheck({
                fileSize,
                totalChunks: totalChunks + 1,
                inDir: cacheDir,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error?.type).toBe("missing");
        });

        it("should not pass the check with error: size ", async (): Promise<void> => {
            const result: NodeCheckResult = await nodeCheck({
                fileSize: fileSize + 1,
                totalChunks,
                inDir: cacheDir,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error?.type).toBe("size");
        });

        it("should pass the check", async (): Promise<void> => {
            const result: NodeCheckResult = await nodeCheck({
                fileSize,
                totalChunks,
                inDir: cacheDir,
            });

            getMemUsage({ name: "@filego/node check" });

            expect(result.success).toBe(true);
        });

        it("should be able to merge to file", async (): Promise<void> => {
            await nodeMerge({
                inDir: cacheDir,
                outFile: outFile,
            });

            getMemUsage({ name: "@filego/node merge" });

            expect(fs.existsSync(outFile)).toBe(true);
        });
    }
});
