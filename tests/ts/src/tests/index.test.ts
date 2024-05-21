import type { CheckResult, Chunk, MergeResult, SplitResult } from "@filego/ts";

import * as fse from "fs-extra";

import { check, merge, split } from "@filego/ts";

import { describe, expect, it } from "vitest";

import { getMemUsage } from "@test/shared";

import { chunkSize, fileNames, inPaths } from "../configs/base";

import { blobToBase64 } from "../functions/blobToBase64";

describe("tests for split, check and merge", (): void => {
    for (let i: number = 0; i < inPaths.length; i++) {
        const file: string = fileNames[i];
        const fileName: string = file.split(".")[0];

        const inPath: string = inPaths[i];

        let fileSize: number = 0;
        let totalChunks: number = 0;
        let chunks: Chunk[] = [];

        it("should be able to split base64 data", async (): Promise<void> => {
            const fileData: string = await blobToBase64(
                new Blob([await fse.readFile(inPath)]),
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");
        });

        it("should be able to split Uint8Array", async (): Promise<void> => {
            const fileData: Uint8Array = new Uint8Array(
                await fse.readFile(inPath),
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");
        });

        it("should be able to split File", async (): Promise<void> => {
            const fileData: File = new File(
                [await fse.readFile(inPath)],
                fileName,
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            getMemUsage({ name: "@filego/ts split" });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");

            fileSize = result.fileSize;
            totalChunks = result.totalChunks;
            chunks = result.chunks;
        });

        it("should not pass the check with error: missing ", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize,
                totalChunks: totalChunks + 1,
                chunks,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error.type).toBe("missing");
        });

        it("should not pass the check with error: size ", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize: fileSize + 1,
                totalChunks,
                chunks,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error.type).toBe("size");
        });

        it("should pass the check", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize,
                totalChunks,
                chunks,
            });

            getMemUsage({ name: "@filego/ts check" });

            expect(result.success).toBe(true);
        });

        it("should be able to merge", async (): Promise<void> => {
            const result: MergeResult = await merge({
                chunks,
            });

            getMemUsage({ name: "@filego/ts merge" });

            expect(result.blob.size).toBe(fileSize);
        });
    }
});
