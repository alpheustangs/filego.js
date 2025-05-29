import type { WriteStream } from "node:fs";

import type { MergeIoOptions, MergeOptions, MergeResult } from "@filego/shared";

import { merge as _merge } from "@filego/js";

const mergeIo = async (options: MergeIoOptions): Promise<boolean> => {
    const { inDir, outFile, mergeFunction }: MergeIoOptions = options;

    // custom

    if (mergeFunction) return await mergeFunction({ inDir, outFile });

    // default

    let fs: typeof import("node:fs");
    let fsp: typeof import("node:fs/promises");
    let path: typeof import("node:path");

    try {
        fs = await import("node:fs");
        fsp = await import("node:fs/promises");
        path = await import("node:path");
    } catch (e: unknown) {
        throw new Error("Node.js is required to use the merge function");
    }

    // check if the input directory exists
    if (!fs.existsSync(inDir)) {
        throw new Error("Input direcotry not found");
    }

    if (!fs.statSync(inDir).isDirectory()) {
        throw new TypeError("Input direcotry is not a direcotry");
    }

    // remove and create
    if (fs.existsSync(outFile)) {
        await fsp.rm(outFile, { recursive: true });
    }

    await fsp.mkdir(path.dirname(outFile), { recursive: true });

    // count files
    const length: number = await fsp
        .readdir(inDir)
        .then((files: string[]): number => files.length);

    // write
    await new Promise((resolve, reject): void => {
        const stream: WriteStream = fs.createWriteStream(outFile, {
            flags: "a",
        });

        stream.on("close", resolve);

        stream.on("error", reject);

        let i: number = 0;

        const write = (): void => {
            let isWritable: boolean = true;

            while (isWritable && i < length) {
                isWritable = stream.write(
                    fs.readFileSync(path.join(inDir, i.toString())),
                );
                i++;
            }

            if (i < length) {
                stream.once("drain", write);
            } else {
                stream.end();
            }
        };

        write();
    });

    return true;
};

/**
 * This function merges the chunks by using the `chunks` parameters.
 *
 * It will return the `blob` of the merged file.
 *
 * ### Example
 *
 * ```ts
 * import { merge } from "@filego/node";
 *
 * await merge({
 *     chunks: [], // result from split function...
 * });
 * ```
 */
async function merge(options: MergeOptions): Promise<MergeResult>;

/**
 * This function merges the chunks from a directory to a specified path directly.
 *
 * It will return `true` as the result.
 *
 * ### Example
 *
 * ```ts
 * import { merge } from "@filego/node";
 *
 * await merge({
 *     inDir: "/path/to/dir",
 *     outFile: "/path/to/file.txt",
 * });
 * ```
 */
async function merge(options: MergeIoOptions): Promise<boolean>;

async function merge(
    options: MergeOptions | MergeIoOptions,
): Promise<MergeResult | boolean> {
    if ("chunks" in options) return await _merge(options);
    return await mergeIo(options);
}

export { merge };
