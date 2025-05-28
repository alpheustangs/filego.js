[@filego/node](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<void>;
```

Defined in: [node/src/base/merge.ts:35](https://github.com/alpheusday/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/node/src/base/merge.ts#L35)

This function merges the chunks from a directory to a specified path directly.

Therefore, nothing will be returned as a result.

### Example

```ts
import { merge } from "@filego/node";

await merge({
    inDir: "/path/to/dir",
    outFile: "/path/to/file.txt",
});
```

## Parameters

### options

[`MergeOptions`](../type-aliases/MergeOptions.md)

## Returns

`Promise`\<`void`\>
