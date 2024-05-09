import type { CheckResult } from "@filego/shared";

type _CheckOptions = {
    /**
     * input Directory
     */
    inDir: string;
    /**
     * size of the original file
     */
    fileSize: number;
    /**
     * how many chunks in total
     */
    totalChunks: number;
};

type CheckFunctionOptions = _CheckOptions;

type CheckOptions = _CheckOptions & {
    checkFunction?: (
        options: CheckFunctionOptions,
    ) => CheckResult | Promise<CheckResult>;
};

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
            status: "error",
            error: "missing",
            missing,
        };
    }

    // not the same size
    if (actualSize !== fileSize) {
        return {
            status: "error",
            error: "size",
        };
    }

    return {
        status: "success",
    };
};

export type { CheckOptions, CheckResult, CheckFunctionOptions };
export { check };
