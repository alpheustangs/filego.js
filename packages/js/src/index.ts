export type {
    FileChunk,
    // split
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
    // check
    CheckFunctionOptions,
    CheckOptions,
    CheckResultError,
    CheckResult,
    // merge
    MergeFunctionOptions,
    MergeOptions,
    MergeResult,
} from "@filego/shared";

export { isTypeOfFileChunks, isTypeOfFileChunk } from "@filego/shared";

export { split } from "#/functions/split";

export { check } from "#/functions/check";

export { merge } from "#/functions/merge";
