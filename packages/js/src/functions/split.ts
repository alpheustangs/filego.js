import type { FileChunk, SplitOptions, SplitResult } from "@filego/shared";

const ermsg: string =
    "file is not a File, Blob, file URI, Uint8Array or Base64 data";

/**
 * This function splits file into chunks,
 * and the chunks can be used to check and merge later.
 *
 * It will return the `chunks`, `fileSize` and `totalChunks`.
 *
 * ### Example
 *
 * ```ts
 * import { split } from "@filego/js";
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

export { split };
