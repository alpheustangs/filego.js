/**
 * This function checks whether the `chunks` parameter is an Array of Chunk.
 *
 * ### Example
 *
 * ```ts
 * import type { FileChunk } from "@filego/shared";
 * import { isTypeOfFileChunks } from "@filego/shared";
 *
 * const chunks: FileChunk[] = []; // file chunks...
 * const result: boolean = isTypeOfFileChunks(chunks);
 * ```
 */
const isTypeOfFileChunks = (chunks) => {
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
 * This function checks whether the `chunk` object is a Chunk.
 *
 * ### Example
 *
 * ```ts
 * import type { FileChunk } from "@filego/shared";
 * import { isTypeOfFileChunk } from "@filego/shared";
 *
 * const chunk: FileChunk = {
 *     // ...
 * };
 * const result: boolean = isTypeOfFileChunks(chunks);
 * ```
 */
const isTypeOfFileChunk = (chunk) => {
    return isTypeOfFileChunks([chunk]);
};
/**
 * This function sorts the `chunks` parameter by the `index` property.
 *
 * ### Example
 *
 * ```ts
 * import type { Chunk } from "@filego/shared";
 * import { sortFileChunks } from "@filego/shared";
 *
 * const chunks: FileChunk[] = []; // file chunks...
 * const sorted: FileChunk[] = sortFileChunks(chunks);
 * ```
 */
const sortFileChunks = (array) => {
    return array.sort((a, b) => (a?.index && b?.index ? a.index - b.index : 0));
};
export { isTypeOfFileChunks, isTypeOfFileChunk, sortFileChunks };
