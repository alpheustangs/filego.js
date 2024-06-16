import type { CheckResult } from "@filego/shared";

type _CheckOptions = {
    /** input Directory */
    inDir: string;
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
 * Check file integrity by verifying the the chunks specified
 * in the `inDir` with `fileSize`, `totalChunks` parameters.
 * It will return the `status` and the `error` of the check.
 *
 * ## Example
 *
 * ```typescript
 * import { check } from "@filego/node";
 *
 * await check({
 *     inDir: "/path/to/dir",
 *     fileSize: 0, // result from split function...
 *     totalChunks: 0, // result from split function...
 * });
 * ```
 */
const check = async (options: CheckOptions): Promise<CheckResult> => {
    const { inDir, fileSize, totalChunks, checkFunction }: CheckOptions =
        options;

    if (typeof inDir !== "string") {
        throw new TypeError("inDir is not a directory in string");
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
            fileSize,
            totalChunks,
            inDir,
        });
    }

    // default
    const fs = await import("node:fs");
    const fsp = await import("node:fs/promises");
    const path = await import("node:path");

    if (!fs.existsSync(inDir)) {
        throw new Error("Input directory not found");
    }

    if (!fs.statSync(inDir).isDirectory()) {
        throw new TypeError("Input directory is not a directory");
    }

    let actualSize: number = 0;
    const missing: number[] = [];

    for (let i: number = 0; i < totalChunks; i++) {
        const filePath: string = path.join(inDir, `${i}`);

        if (fs.existsSync(filePath)) {
            actualSize += (await fsp.stat(filePath)).size;
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

    // success
    return {
        success: true,
    };
};

export type { CheckOptions, CheckResult, CheckFunctionOptions };
export { check };
