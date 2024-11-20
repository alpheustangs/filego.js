import type { FileChunk } from "@filego/shared";
import type {
    CheckFunctionOptions,
    CheckOptions,
    CheckResult,
} from "#/base/check";
import type {
    MergeFunctionOptions,
    MergeOptions,
    MergeResult,
} from "#/base/merge";
import type {
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
} from "#/base/split";

import { check } from "#/base/check";
import { merge } from "#/base/merge";
import { split } from "#/base/split";

export type {
    FileChunk,
    // split
    SplitOptions,
    SplitFunctionOptions,
    SplitResult,
    // check
    CheckOptions,
    CheckFunctionOptions,
    CheckResult,
    // merge
    MergeOptions,
    MergeFunctionOptions,
    MergeResult,
};
export { split, check, merge };
