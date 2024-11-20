import type {
    CheckFunctionOptions,
    CheckOptions,
    CheckResult,
} from "#/base/check";
import type { MergeFunctionOptions, MergeOptions } from "#/base/merge";
import type {
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
} from "#/base/split";

import { check } from "#/base/check";
import { merge } from "#/base/merge";
import { split } from "#/base/split";

export type {
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
};
export { split, check, merge };
