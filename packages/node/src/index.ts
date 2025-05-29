export type {
    FileChunk,
    // split
    SplitFunctionOptions,
    SplitIoFunctionOptions,
    SplitOptions,
    SplitIoOptions,
    SplitResult,
    SplitIoResult,
    // check
    CheckFunctionOptions,
    CheckIoFunctionOptions,
    CheckOptions,
    CheckIoOptions,
    CheckResultError,
    CheckResult,
    // merge
    MergeFunctionOptions,
    MergeIoFunctionOptions,
    MergeOptions,
    MergeIoOptions,
    MergeResult,
} from "@filego/shared";

export { isTypeOfFileChunks, isTypeOfFileChunk } from "@filego/shared";

export { split } from "#/functions/split";

export { check } from "#/functions/check";

export { merge } from "#/functions/merge";
