import type { CheckOptions, CheckResult, FileChunk } from "@filego/shared";

import { sortFileChunks } from "@filego/shared";

/**
 * This function checks file integrity by verifying
 * the `chunks` with `fileSize` and `totalChunks` parameters.
 *
 * It will return the `status` and the `error` of the check.
 *
 * ### Example
 *
 * ```ts
 * import { check } from "@filego/js";
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

    // custom check function
    if (checkFunction) {
        return await checkFunction({
            chunks,
            fileSize,
            totalChunks,
        });
    }

    const sorted: FileChunk[] = sortFileChunks(chunks);

    let actualSize: number = 0;
    const missing: number[] = [];

    for (let i: number = 0; i < totalChunks; i++) {
        const chunk: FileChunk = sorted[i] as FileChunk;

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

export { check };
