import type { Chunk } from "#/@types/chunk";

const isTypeOfChunk = (chunks: Chunk[]): boolean => {
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

export { isTypeOfChunk };
