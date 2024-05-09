import type { WriteStream } from "node:fs";

type _MergeOptions = {
    /**
     * input directory
     */
    inDir: string;
    /**
     * output path
     */
    outPath: string;
};

type MergeFunctionOptions = _MergeOptions;

type MergeOptions = _MergeOptions & {
    /**
     * custom merge function
     */
    mergeFunction?: (options: MergeFunctionOptions) => void | Promise<void>;
};

const merge = async (options: MergeOptions): Promise<void> => {
    const { inDir, outPath, mergeFunction }: MergeOptions = options;

    if (typeof inDir !== "string") {
        throw new TypeError("inDir is not a directory in string");
    }

    if (typeof outPath !== "string") {
        throw new TypeError("outPath is not a path in string");
    }

    if (mergeFunction && typeof mergeFunction !== "function") {
        throw new TypeError("mergeFunction is not a function");
    }

    /* custom merge function */

    if (mergeFunction) return await mergeFunction({ inDir, outPath });

    /* merge function */

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
    if (fs.existsSync(outPath)) {
        await fsp.rm(outPath, { recursive: true });
    }

    await fsp.mkdir(path.dirname(outPath), { recursive: true });

    // count files
    const length: number = await fsp
        .readdir(inDir)
        .then((files: string[]): number => files.length);

    // write
    await new Promise((resolve, reject): void => {
        const stream: WriteStream = fs.createWriteStream(outPath, {
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
