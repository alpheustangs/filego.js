import type { FileChunk } from "@filego/shared";

import { isTypeOfFileChunks, sortFileChunks } from "@filego/shared";

type _MergeOptions = {
    /** Chunks to be merged in the `merge` function. */
    chunks: FileChunk[];
};

/** Options for the custom merge function in the `merge` function. */
type MergeFunctionOptions = _MergeOptions;

/** Result of the `merge` function. */
type MergeResult = {
    /** merged blob */
    blob: Blob;
    /** merged buffer */
    buffer: Buffer;
};

/** Options for the `merge` function. */
type MergeOptions = _MergeOptions & {
    /** Custom merge function for the `merge` function. */
    mergeFunction?: (
        options: MergeFunctionOptions,
    ) => MergeResult | Promise<MergeResult>;
};

/**
 * This function merges the chunks by using the `chunks` parameters.
 * It will return the `blob` and `buffer` of the merged file.
 *
 * ## Example
 *
 * ```typescript
 * import { merge } from "@filego/ts";
 *
 * await merge({
 *     chunks: [], // result from split function...
 * });
 * ```
 */
const merge = async (options: MergeOptions): Promise<MergeResult> => {
    const { chunks, mergeFunction }: MergeOptions = options;

    if (isTypeOfFileChunks(chunks) === false) {
        throw new TypeError("chunks is not an Array of Chunk");
    }

    if (mergeFunction && typeof mergeFunction !== "function") {
        throw new TypeError("mergeFunction is not a function");
    }

    // custom merge function

    if (mergeFunction) return await mergeFunction({ chunks });

    // merge function

    const blob: Blob = new Blob(
        sortFileChunks(chunks).map((chunk: FileChunk): Blob => chunk.blob),
    );

    let buffer: Buffer;

    if (typeof blob.arrayBuffer === "function") {
        buffer = Buffer.from(await blob.arrayBuffer());
    }
    // fallback
    else {
        buffer = Buffer.from(await new Response(blob).arrayBuffer());
    }

    return {
        blob,
        buffer,
    };
};

export type { MergeOptions, MergeFunctionOptions, MergeResult };
export { merge };
