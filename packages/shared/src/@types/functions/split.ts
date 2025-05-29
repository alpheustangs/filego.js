import type { Format } from "ts-vista";

import type { FileChunk } from "#/@types/chunk";

type SplitBaseOptions = {
    /**
     * The size of each chunk in byte.
     */
    chunkSize: number;
};

type _SplitOptions = {
    /**
     * file to split, which accepts:
     * - File / Blob
     * - Uint8Array data
     * - Base64 data prefixed with "data:"
     */
    file: File | Blob | Uint8Array | string;
} & SplitBaseOptions;

type _SplitIoOptions = {
    /**
     * Input file to be splitted in the `split` function.
     */
    inFile: string;
    /**
     * Output directory after splitted in the `split` function.
     */
    outDir: string;
} & SplitBaseOptions;

/**
 * Options for the custom split function in the `split` function.
 */
type SplitFunctionOptions = Format<_SplitOptions>;

/**
 * Options for the custom split function in the `split` function.
 */
type SplitIoFunctionOptions = Format<_SplitIoOptions>;

/**
 * Result of the `split` function.
 */
type SplitResult = {
    /**
     * The chunks splitted from the original file.
     */
    chunks: FileChunk[];
    /**
     * Size of the original file.
     */
    fileSize: number;
    /**
     * The total number of chunks splitted from the original file.
     */
    totalChunks: number;
};

/**
 * Result of the `split` function.
 */
type SplitIoResult = {
    /**
     * Size of the original file.
     */
    fileSize: number;
    /**
     * The total number of chunks splitted from the original file.
     */
    totalChunks: number;
};

/**
 * Options for the `split` function.
 */
type SplitOptions = Format<
    _SplitOptions & {
        splitFunction?: (
            options: SplitFunctionOptions,
        ) => SplitResult | Promise<SplitResult>;
    }
>;

/**
 * Options for the `split` function.
 */
type SplitIoOptions = Format<
    _SplitIoOptions & {
        splitFunction?: (
            options: SplitIoFunctionOptions,
        ) => SplitIoResult | Promise<SplitIoResult>;
    }
>;

export type {
    SplitFunctionOptions,
    SplitIoFunctionOptions,
    SplitOptions,
    SplitIoOptions,
    SplitResult,
    SplitIoResult,
};
