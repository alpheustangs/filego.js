import type { Chunk } from "..";

const sortChunks = (array: Chunk[]): Chunk[] => {
    return array.sort((a: Chunk, b: Chunk): number =>
        a?.index && b?.index ? a.index - b.index : 0,
    );
};

export { sortChunks };
