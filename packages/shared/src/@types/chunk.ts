/**
 * FileChunk contains the blob data from the file splitted,
 * and the index of the blob data.
 */
type FileChunk = {
    /** Index of the current blob data. */
    index: number;
    /** Blob data from the file splitted. */
    blob: Blob;
};

export type { FileChunk };
