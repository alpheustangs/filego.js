[@filego/node](../README.md) / split

# Function: split()

> **split**(`options`): `Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

This function splits file from a path to a directory directly.
It will only return the `fileSize` and the `totalChunks` of the file.

### Example

```ts
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

## Parameters

• **options**: [`SplitOptions`](../type-aliases/SplitOptions.md)

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

## Defined in

[node/src/base/split.ts:47](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/node/src/base/split.ts#L47)
