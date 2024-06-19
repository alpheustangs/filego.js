/**
 * Chunk contains the blob data of a file,
 * and the index of the blob data.
 */
type FileChunk = {
    /** Index of chunk. */
    index: number;
    /** Blob data of chunk. */
    blob: Blob;
};

export type { FileChunk };
