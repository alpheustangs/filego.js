import type { Format } from "ts-vista";

import type { FileChunk } from "#/@types/chunk";

type CheckBaseOptions = {
    /**
     * Size of the original file,
     * which can be found as an output of the `split` function.
     */
    fileSize: number;
    /**
     * Total number of chunks in the original file,
     * which can be found as an output of the `split` function.
     */
    totalChunks: number;
};

type _CheckOptions = {
    /**
     * Chunks to be checked in the `check` function.
     */
    chunks: FileChunk[];
} & CheckBaseOptions;

type _CheckIoOptions = {
    /**
     * Input directory to be checked in the `check` function.
     */
    inDir: string;
} & CheckBaseOptions;

/**
 * Options for the custom split function in the `split` function.
 */
type CheckFunctionOptions = Format<_CheckOptions>;

/**
 * Options for the custom split function in the `split` function.
 */
type CheckIoFunctionOptions = Format<_CheckIoOptions>;

/**
 * Result error of the `check` function.
 */
type CheckResultError = {
    /**
     * Error message of the check.
     */
    message: string;
} & (
    | {
          /**
           * Some of the chunks are missing to merge the file.
           */
          type: "missing";
          /**
           * Missing chunk(s) to merge the file.
           */
          missing: number[];
      }
    | {
          /**
           * The size of chunks do not match the `fileSize` parameter.
           */
          type: "size";
      }
);

/**
 * Result of the `check` function.
 */
type CheckResult =
    | {
          /**
           * Successful check.
           */
          success: true;
      }
    | {
          /**
           * Failed check.
           */
          success: false;
          /**
           * Error details of the check.
           */
          error: CheckResultError;
      };

/**
 * Options for the `check` function.
 */
type CheckOptions = Format<
    _CheckOptions & {
        /**
         * Custom check function for the `check` function.
         */
        checkFunction?: (
            options: CheckFunctionOptions,
        ) => CheckResult | Promise<CheckResult>;
    }
>;

/**
 * Options for the `check` function.
 */
type CheckIoOptions = Format<
    _CheckIoOptions & {
        /**
         * Custom check function for the `check` function.
         */
        checkFunction?: (
            options: CheckIoFunctionOptions,
        ) => CheckResult | Promise<CheckResult>;
    }
>;

export type {
    CheckFunctionOptions,
    CheckIoFunctionOptions,
    CheckOptions,
    CheckIoOptions,
    CheckResultError,
    CheckResult,
};
