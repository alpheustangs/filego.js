import type { FileChunk } from "#/@types/chunk";

/**
 * Check whether the `chunks` parameter is an Array of Chunk.
 *
 * ## Example
 *
 * ```typescript
 * import type { FileChunk } from "@filego/shared";
 * import { isTypeOfChunks } from "@filego/shared";
 *
 * const chunks: FileChunk[] = // ...
 * const result: boolean = isTypeOfChunks(chunks);
 * ```
 */
const isTypeOfFileChunks = (chunks: FileChunk[]): boolean => {
    if (Array.isArray(chunks) === false) {
        return false;
    }

    if (
        chunks.length > 0 &&
        (typeof chunks[0] !== "object" ||
            typeof chunks[0].index !== "number" ||
            typeof chunks[0].blob !== "object")
    ) {
        return false;
    }

    return true;
};

/**
 * Sort the `chunks` parameter by the `index` property.
 *
 * ## Example
 *
 * ```typescript
 * import type { Chunk } from "@filego/shared";
 * import { sortChunks } from "@filego/shared";
 *
 * const chunks: FileChunk[] = // ...
 * const sorted: FileChunk[] = sortChunks(chunks);
 * ```
 */
const sortFileChunks = (array: FileChunk[]): FileChunk[] => {
    return array.sort((a: FileChunk, b: FileChunk): number =>
        a?.index && b?.index ? a.index - b.index : 0,
    );
};

export { isTypeOfFileChunks, sortFileChunks };
