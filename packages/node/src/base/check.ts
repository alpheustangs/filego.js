import type { CheckResult } from "@filego/shared";

type _CheckOptions = {
    /** Input directory to be checked in the `check` function. */
    inDir: string;
    /**
     * Size of the original file,
     * which can be found as an output of the `split` function.
     */
    fileSize: number;
    /**
     * Total number of chunks in the original file,
     * which can be found as an output of the `split` function.
     */
    totalChunks: number;
};

/** Options for the custom check function in the `check` function. */
type CheckFunctionOptions = _CheckOptions;

/** Options for the `check` function. */
type CheckOptions = _CheckOptions & {
    /** Custom check function for the `check` function. */
    checkFunction?: (
        options: CheckFunctionOptions,
    ) => CheckResult | Promise<CheckResult>;
};

/**
 * This function checks file integrity by verifying the chunks specified
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

    // custom

    if (checkFunction) {
        return await checkFunction({
            fileSize,
            totalChunks,
            inDir,
        });
    }

    // default

    let fs: typeof import("node:fs");
    let fsp: typeof import("node:fs/promises");
    let path: typeof import("node:path");

    try {
        fs = await import("node:fs");
        fsp = await import("node:fs/promises");
        path = await import("node:path");
    } catch (e: unknown) {
        throw new Error("Node.js is required to use the check function");
    }

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
