[< Back](./../../README.md)

# @filego/js v0.8.0

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [CheckFunctionOptions](type-aliases/CheckFunctionOptions.md) | Options for the custom check function in the `check` function. |
| [CheckOptions](type-aliases/CheckOptions.md) | Options for the `check` function. |
| [CheckResult](type-aliases/CheckResult.md) | Result of the `check` function. |
| [FileChunk](type-aliases/FileChunk.md) | FileChunk contains the blob data from the file splitted, and the index of the blob data. |
| [MergeFunctionOptions](type-aliases/MergeFunctionOptions.md) | Options for the custom merge function in the `merge` function. |
| [MergeOptions](type-aliases/MergeOptions.md) | Options for the `merge` function. |
| [MergeResult](type-aliases/MergeResult.md) | Result of the `merge` function. |
| [SplitFunctionOptions](type-aliases/SplitFunctionOptions.md) | Options for the custom split function in the `split` function. |
| [SplitOptions](type-aliases/SplitOptions.md) | Options for the `split` function. |
| [SplitResult](type-aliases/SplitResult.md) | Result of the `split` function. |

## Functions

| Function | Description |
| ------ | ------ |
| [check](functions/check.md) | This function checks file integrity by verifying the `chunks` with `fileSize` and `totalChunks` parameters. |
| [merge](functions/merge.md) | This function merges the chunks by using the `chunks` parameters. |
| [split](functions/split.md) | This function splits file into chunks, and the chunks can be used to check and merge later. |
