import type { Chunk } from "@filego/shared";

import { isTypeOfChunk, sortChunks } from "@filego/shared";

type _MergeOptions = {
    /**
     * chunks to merge
     */
    chunks: Chunk[];
};

type MergeFunctionOptions = _MergeOptions;

type MergeResult = {
    /**
     * merged blob
     */
    blob: Blob;
    /**
     * merged buffer
     */
    buffer: Buffer;
};

type MergeOptions = _MergeOptions & {
    /**
     * custom merge function
     */
    mergeFunction?: (
        options: MergeFunctionOptions,
    ) => MergeResult | Promise<MergeResult>;
};

const merge = async (options: MergeOptions): Promise<MergeResult> => {
    const { chunks, mergeFunction }: MergeOptions = options;

    if (isTypeOfChunk(chunks) === false) {
        throw new TypeError("chunks is not an Array of Chunk");
    }

    if (mergeFunction && typeof mergeFunction !== "function") {
        throw new TypeError("mergeFunction is not a function");
    }

    /* custom merge function */

    if (mergeFunction) return await mergeFunction({ chunks });

    /* merge function */

    const blob: Blob = new Blob(
        sortChunks(chunks).map((chunk: Chunk): Blob => chunk.blob),
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
