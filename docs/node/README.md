# @filego/node

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [CheckFunctionOptions](type-aliases/CheckFunctionOptions.md) | Options for the custom check function in the `check` function. |
| [CheckOptions](type-aliases/CheckOptions.md) | Options for the `check` function. |
| [CheckResult](type-aliases/CheckResult.md) | Result of the `check` function. |
| [MergeFunctionOptions](type-aliases/MergeFunctionOptions.md) | Options for the custom merge function in the `merge` function. |
| [MergeOptions](type-aliases/MergeOptions.md) | Options for the `merge` function. |
| [SplitFunctionOptions](type-aliases/SplitFunctionOptions.md) | Options for the custom split function in the `split` function. |
| [SplitOptions](type-aliases/SplitOptions.md) | Options for the `split` function. |
| [SplitResult](type-aliases/SplitResult.md) | Result of the `split` function. |

## Functions

| Function | Description |
| ------ | ------ |
| [check](functions/check.md) | This function checks file integrity by verifying the chunks specified in the `inDir` with `fileSize`, `totalChunks` parameters. It will return the `status` and the `error` of the check. |
| [merge](functions/merge.md) | This function merges the chunks from a directory to a specified path directly. Therefore, nothing will be returned as a result. |
| [split](functions/split.md) | This function splits file from a path to a directory directly. It will only return the `fileSize` and the `totalChunks` of the file. |
