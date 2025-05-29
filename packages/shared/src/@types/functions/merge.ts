import type { Format } from "ts-vista";

import type { FileChunk } from "#/@types/chunk";

type _MergeOptions = {
    /**
     * Chunks to be merged in the `merge` function.
     */
    chunks: FileChunk[];
};

type _MergeIoOptions = {
    /**
     * Input directory to be merged in the `merge` function.
     */
    inDir: string;
    /**
     * Output file after merging in the `merge` function.
     */
    outFile: string;
};

/**
 * Options for the custom merge function in the `merge` function.
 */
type MergeFunctionOptions = _MergeOptions;

/**
 * Options for the custom merge function in the `merge` function.
 */
type MergeIoFunctionOptions = _MergeIoOptions;

/**
 * Options for the `merge` function.
 */
type MergeOptions = Format<
    _MergeOptions & {
        /**
         * Custom merge function for the `merge` function.
         */
        mergeFunction?: (
            options: MergeFunctionOptions,
        ) => MergeResult | Promise<MergeResult>;
    }
>;

/**
 * Options for the `merge` function.
 */
type MergeIoOptions = Format<
    _MergeIoOptions & {
        /**
         * Custom merge function for the `merge` function.
         */
        mergeFunction?: (
            options: MergeIoFunctionOptions,
        ) => boolean | Promise<boolean>;
    }
>;

/**
 * Result of the `merge` function.
 */
type MergeResult = {
    /**
     * merged blob.
     */
    blob: Blob;
};

export type {
    MergeFunctionOptions,
    MergeIoFunctionOptions,
    MergeOptions,
    MergeIoOptions,
    MergeResult,
};
