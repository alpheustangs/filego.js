/** Chunk contains the index number and the blob data of a file. */
type FileChunk = {
    /** Index of chunk. */
    index: number;
    /** Blob data of chunk. */
    blob: Blob;
};

export type { FileChunk };
