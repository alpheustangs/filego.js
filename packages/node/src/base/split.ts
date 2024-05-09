import type { ReadStream } from "node:fs";

type _SplitOptions = {
    /**
     * input path
     */
    inPath: string;
    /**
     * output directory
     */
    outDir: string;
    /**
     * size of each chunk in byte
     */
    chunkSize: number;
};

type SplitFunctionOptions = _SplitOptions;

type SplitResult = {
    /**
     * size of the original file
     */
    fileSize: number;
    /**
     * how many chunks in total
     */
    totalChunks: number;
};

type SplitOptions = _SplitOptions & {
    /**
     * custom split function
     */
    splitFunction?: (
        options: SplitFunctionOptions,
    ) => SplitResult | Promise<SplitResult>;
};

const split = async (options: SplitOptions): Promise<SplitResult> => {
    const { inPath, outDir, chunkSize, splitFunction }: SplitOptions = options;

    if (typeof inPath !== "string") {
        throw new TypeError("inPath is not a path in string");
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

    /* custom split function */

    if (splitFunction)
        return await splitFunction({ inPath, outDir, chunkSize });

    /* split tunnel */

    const fs = await import("node:fs");
    const fsp = await import("node:fs/promises");
    const path = await import("node:path");

    if (!fs.existsSync(inPath)) {
        throw new Error("Input path not found");
    }

    if (!fs.statSync(inPath).isFile()) {
        throw new TypeError("Input path is not a file");
    }

    if (fs.existsSync(outDir)) {
        await fsp.rm(outDir, { recursive: true });
    }

    await fsp.mkdir(outDir, { recursive: true });

    let fileSize: number = 0;
    let index: number = 0;

    await new Promise((resolve, reject): void => {
        const readStream: ReadStream = fs.createReadStream(inPath);

        let current: Buffer = Buffer.alloc(0);

        readStream.on("error", reject);

        readStream.on("data", (data: Buffer): void => {
            // previous + current buffers
            current = Buffer.concat([current, Buffer.from(data)]);

            while (current.length >= chunkSize) {
                const _current: Buffer = current.slice(0, chunkSize);

                fs.writeFileSync(path.join(outDir, `${index}`), _current);

                fileSize += _current.length;

                index++;

                // save exceeded buffers
                current = current.slice(chunkSize);
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
