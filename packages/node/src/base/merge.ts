import type { WriteStream } from "node:fs";

type _MergeOptions = {
    /** Input directory to be merged in the `merge` function. */
    inDir: string;
    /** Output file after merging in the `merge` function. */
    outFile: string;
};

/** Options for custom logic in `merge` function. */
type MergeFunctionOptions = _MergeOptions;

/** Options for `merge` function. */
type MergeOptions = _MergeOptions & {
    /** Custom logic for `merge` function. */
    mergeFunction?: (options: MergeFunctionOptions) => void | Promise<void>;
};

/**
 * Merge the chunks from a directory to a specified path directly.
 * Therefore, nothing will be returned.
 *
 * ## Example
 *
 * ```typescript
 * import { merge } from "@filego/node";
 *
 * await merge({
 *     inDir: "/path/to/dir",
 *     outFile: "/path/to/file.txt",
 * });
 * ```
 */
const merge = async (options: MergeOptions): Promise<void> => {
    const { inDir, outFile, mergeFunction }: MergeOptions = options;

    if (typeof inDir !== "string") {
        throw new TypeError("inDir is not a directory in string");
    }

    if (typeof outFile !== "string") {
        throw new TypeError("outFile is not a path in string");
    }

    if (mergeFunction && typeof mergeFunction !== "function") {
        throw new TypeError("mergeFunction is not a function");
    }

    // custom merge function

    if (mergeFunction) return await mergeFunction({ inDir, outFile });

    // merge function

    const fs = await import("node:fs");
    const fsp = await import("node:fs/promises");
    const path = await import("node:path");

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
};

export type { MergeOptions, MergeFunctionOptions };
export { merge };
