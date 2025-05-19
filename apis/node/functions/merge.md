[@filego/node](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<void>;
```

Defined in: [node/src/base/merge.ts:35](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/node/src/base/merge.ts#L35)

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
