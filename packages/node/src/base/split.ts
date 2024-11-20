import type { ReadStream } from "node:fs";

type _SplitOptions = {
    /** Input file to be splitted in the `split` function. */
    inFile: string;
    /** Output directory after splitted in the `split` function. */
    outDir: string;
    /** Size of each chunk in byte to be splitted. */
    chunkSize: number;
};

/** Options for the custom split function in the `split` function. */
type SplitFunctionOptions = _SplitOptions;

/** Result of the `split` function. */
type SplitResult = {
    /** Size of the original file. */
    fileSize: number;
    /** The total number of chunks splitted from the original file. */
    totalChunks: number;
};

/** Options for the `split` function. */
type SplitOptions = _SplitOptions & {
    /** Custom split function for `split` function. */
    splitFunction?: (
        options: SplitFunctionOptions,
    ) => SplitResult | Promise<SplitResult>;
};

/**
 * This function splits file from a path to a directory directly.
 * It will only return the `fileSize` and the `totalChunks` of the file.
 *
 * ### Example
 *
 * ```ts
 * import { split } from "@filego/node";
 *
 * await split({
 *     inFile: "/path/to/file.txt",
 *     outDir: "/path/to/dir",
 *     chunkSize: 2 * 1024 * 1024,
 * });
 * ```
 */
const split = async (options: SplitOptions): Promise<SplitResult> => {
    const { inFile, outDir, chunkSize, splitFunction }: SplitOptions = options;

    if (typeof inFile !== "string") {
        throw new TypeError("inFile is not a path in string");
    }

    if (typeof outDir !== "string") {
        throw new TypeError("outDir is not a directory in string");
    }

    if (typeof chunkSize !== "number") {
        throw new TypeError("chunkSize is not a number");
    }

    if (splitFunction && typeof splitFunction !== "function") {
        throw new TypeError("splitFunction is not a function");
    }

    // custom

    if (splitFunction)
        return await splitFunction({ inFile, outDir, chunkSize });

    // default

    let fs: typeof import("node:fs");
    let fsp: typeof import("node:fs/promises");
    let path: typeof import("node:path");

    try {
        fs = await import("node:fs");
        fsp = await import("node:fs/promises");
        path = await import("node:path");
    } catch (e: unknown) {
        throw new Error("Node.js is required to use the split function");
    }

    if (!fs.existsSync(inFile)) {
        throw new Error("Input path not found");
    }

    if (!fs.statSync(inFile).isFile()) {
        throw new TypeError("Input path is not a file");
    }

    if (fs.existsSync(outDir)) {
        await fsp.rm(outDir, { recursive: true });
    }

    await fsp.mkdir(outDir, { recursive: true });

    let fileSize: number = 0;
    let index: number = 0;

    await new Promise((resolve, reject): void => {
        const readStream: ReadStream = fs.createReadStream(inFile);

        let current: Buffer = Buffer.alloc(0);

        readStream.on("error", reject);

        readStream.on("data", (data: Buffer): void => {
            // previous + current buffers
            current = Buffer.concat([current, Buffer.from(data)]);

            while (current.length >= chunkSize) {
                const _current: Buffer = current.subarray(0, chunkSize);

                fs.writeFileSync(path.join(outDir, `${index}`), _current);

                fileSize += _current.length;

                index++;

                // save exceeded buffers
                current = current.subarray(chunkSize);
            }
        });

        readStream.on("end", (): void => {
            // write exceeded buffers
            if (current.length > 0) {
                const _current: Buffer = Buffer.from(current);

                fs.writeFileSync(path.join(outDir, `${index}`), _current);

                fileSize += _current.length;

                index++;
            }
        });

        readStream.on("close", resolve);
    });

    return { fileSize, totalChunks: index };
};

export type { SplitOptions, SplitResult, SplitFunctionOptions };
export { split };
