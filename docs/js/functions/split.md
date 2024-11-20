[@filego/js](../README.md) / split

# Function: split()

> **split**(`options`): `Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

This function splits file into chunks,
and the chunks can be used to check and merge later.
It will return the `chunks`, `fileSize` and `totalChunks`.

### Example

```ts
import { split } from "@filego/js";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
});
```

## Parameters

• **options**: [`SplitOptions`](../type-aliases/SplitOptions.md)

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

## Defined in

[js/src/base/split.ts:57](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/js/src/base/split.ts#L57)
