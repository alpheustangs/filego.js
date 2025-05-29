export type {
    SplitFunctionOptions,
    SplitIoFunctionOptions,
    SplitOptions,
    SplitIoOptions,
    SplitResult,
    SplitIoResult,
} from "#/@types/functions/split";

export type {
    CheckFunctionOptions,
    CheckIoFunctionOptions,
    CheckOptions,
    CheckIoOptions,
    CheckResultError,
    CheckResult,
} from "#/@types/functions/check";

export type {
    MergeFunctionOptions,
    MergeIoFunctionOptions,
    MergeOptions,
    MergeIoOptions,
    MergeResult,
} from "#/@types/functions/merge";

export type { FileChunk } from "#/@types/chunk";

export {
    isTypeOfFileChunks,
    isTypeOfFileChunk,
    sortFileChunks,
} from "#/functions/chunks";
