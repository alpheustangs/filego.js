import type { FileChunk, MergeOptions, MergeResult } from "@filego/shared";

import { sortFileChunks } from "@filego/shared";

/**
 * This function merges the chunks by using the `chunks` parameters.
 *
 * It will return the `blob` of the merged file.
 *
 * ### Example
 *
 * ```ts
 * import { merge } from "@filego/js";
 *
 * await merge({
 *     chunks: [], // result from split function...
 * });
 * ```
 */
const merge = async (options: MergeOptions): Promise<MergeResult> => {
    const { chunks, mergeFunction }: MergeOptions = options;

    // custom merge function

    if (mergeFunction) return await mergeFunction({ chunks });

    // merge function

    const sortedChunks: FileChunk[] = sortFileChunks(chunks);
    const blobParts: Blob[] = new Array<Blob>(sortedChunks.length);

    for (let i: number = 0; i < sortedChunks.length; i++) {
        blobParts[i] = (sortedChunks[i] as FileChunk).blob;
    }

    return {
        blob: new Blob(blobParts),
    };
};

export { merge };
