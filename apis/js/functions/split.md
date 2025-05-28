[@filego/js](../README.md) / split

# Function: split()

```ts
function split(options): Promise<SplitResult>;
```

Defined in: [js/src/base/split.ts:58](https://github.com/alpheusday/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/js/src/base/split.ts#L58)

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

### options

[`SplitOptions`](../type-aliases/SplitOptions.md)

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>
