import type { FileChunk } from "@filego/shared";

type _SplitOptions = {
    /**
     * file to split, which accepts:
     * - File / Blob
     * - Uint8Array data
     * - Base64 data prefixed with "data:"
     */
    file: File | Blob | Uint8Array | string;
    /** The size of each chunk in byte. */
    chunkSize: number;
};

/** Options for the custom split function in the `split` function. */
type SplitFunctionOptions = _SplitOptions;

/** Result of the `split` function. */
type SplitResult = {
    /** The chunks splitted from the original file. */
    chunks: FileChunk[];
    /** Size of the original file. */
    fileSize: number;
    /** The total number of chunks splitted from the original file. */
    totalChunks: number;
};

/** Options for the `split` function. */
type SplitOptions = _SplitOptions & {
    /** Custom split function for the `split` function. */
    splitFunction?: (
        options: SplitFunctionOptions,
    ) => SplitResult | Promise<SplitResult>;
};

const ermsg: string =
    "file is not a File, Blob, file URI, Uint8Array or Base64 data";

/**
 * This function splits file into chunks,
 * and the chunks can be used to check and merge later.
 * It will return the `chunks`, `fileSize` and `totalChunks`.
 *
 * ## Example
 *
 * ```typescript
 * import { split } from "@filego/ts";
 *
 * const file: File | Blob | Uint8Array | string = "";
 *
 * await split({
 *     file,
 *     chunkSize: 2 * 1024 * 1024,
 * });
 * ```
 */
const split = async (options: SplitOptions): Promise<SplitResult> => {
    const { file, chunkSize, splitFunction }: SplitOptions = options;

    if (!file || (typeof file === "string" && file.trim() === "")) {
        throw new TypeError(ermsg);
    }

    if (typeof chunkSize !== "number" || chunkSize <= 0) {
        throw new TypeError("chunkSize is not a positive number");
    }

    if (splitFunction && typeof splitFunction !== "function") {
        throw new TypeError("splitFunction is not a function");
    }

    // custom split function

    if (splitFunction) return await splitFunction({ file, chunkSize });

    let blob: Blob;

    // string
    if (typeof file === "string") {
        // base64
        if (file.startsWith("data:")) {
            const byteCharacters: string = atob(
                file.slice(file.indexOf(",") + 1),
            );
            const byteNumbers: number[] = new Array(byteCharacters.length);

            for (let i: number = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            blob = new Blob([new Uint8Array(byteNumbers)]);
        } else {
            throw new TypeError(ermsg);
        }
    }
    // uint8array
    else if (file instanceof Uint8Array) {
        blob = new Blob([file]);
    }
    // file / blob
    else if (file instanceof Blob) {
        blob = file;
    }
    // unknown
    else {
        throw new TypeError(ermsg);
    }

    const total: number = Math.ceil(blob.size / chunkSize);
    const chunks: FileChunk[] = [];

    for (let i: number = 0; i < total; i++) {
        const offset: number = i * chunkSize;
        const limit: number = Math.min(offset + chunkSize, blob.size);
        chunks.push({ index: i, blob: blob.slice(offset, limit) });
    }

    return {
        chunks,
        fileSize: blob.size,
        totalChunks: total,
    };
};

export type { SplitOptions, SplitFunctionOptions, SplitResult };
export { split };
