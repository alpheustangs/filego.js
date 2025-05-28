[@filego/node](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<void>;
```

Defined in: [node/src/base/merge.ts:35](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/node/src/base/merge.ts#L35)

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
