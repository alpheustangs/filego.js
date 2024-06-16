import type { CheckResult, Chunk } from "@filego/shared";

import { isTypeOfChunk, sortChunks } from "@filego/shared";

type _CheckOptions = {
    /** chunks */
    chunks: Chunk[];
    /** size of the original file */
    fileSize: number;
    /** how many chunks in total */
    totalChunks: number;
};

type CheckFunctionOptions = _CheckOptions;

type CheckOptions = _CheckOptions & {
    checkFunction?: (
        options: CheckFunctionOptions,
    ) => CheckResult | Promise<CheckResult>;
};

/**
 * Check file integrity by verifying the `chunks` with `fileSize` and `totalChunks` parameters.
 * It will return the `status` and the `error` of the check.
 *
 * ## Example
 *
 * ```typescript
 * import type { Chunk } from "@filego/ts";
 * import { check } from "@filego/ts";
 *
 * await check({
 *     chunks: [], // result from split function...
 *     fileSize: 0, // result from split function...
 *     totalChunks: 0, // result from split function...
 * });
 * ```
 */
const check = async (options: CheckOptions): Promise<CheckResult> => {
    const { chunks, fileSize, totalChunks, checkFunction }: CheckOptions =
        options;

    if (isTypeOfChunk(chunks) === false) {
        throw new TypeError("chunks is not an Array of Chunk");
    }

    if (typeof fileSize !== "number") {
        throw new TypeError("fileSize is not a number");
    }

    if (typeof totalChunks !== "number") {
        throw new TypeError("totalChunks is not a number");
    }

    if (checkFunction && typeof checkFunction !== "function") {
        throw new TypeError("checkFunction is not a function");
    }

    // custom check function
    if (checkFunction) {
        return await checkFunction({
            chunks,
            fileSize,
            totalChunks,
        });
    }

    const sorted: Chunk[] = sortChunks(chunks);

    let actualSize: number = 0;
    const missing: number[] = [];

    for (let i: number = 0; i < totalChunks; i++) {
        const chunk: Chunk = sorted[i];

        if (chunk && chunk.index === i) {
            actualSize += chunk.blob.size;
        } else {
            missing.push(i);
        }
    }

    // missing part
    if (missing.length > 0) {
        return {
            success: false,
            error: {
                type: "missing",
                message: "missing chunk(s)",
                missing,
            },
        };
    }

    // not the same size
    if (actualSize !== fileSize) {
        return {
            success: false,
            error: {
                type: "size",
                message:
                    "the size of chunks is not equal to `fileSize` parameter",
            },
        };
    }

    return {
        success: true,
    };
};

export type { CheckOptions, CheckFunctionOptions, CheckResult };
export { check };
