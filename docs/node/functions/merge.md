[@filego/node](../README.md) / merge

# Function: merge()

> **merge**(`options`): `Promise`\<`void`\>

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

• **options**: [`MergeOptions`](../type-aliases/MergeOptions.md)

## Returns

`Promise`\<`void`\>

## Defined in

[node/src/base/merge.ts:34](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/node/src/base/merge.ts#L34)
