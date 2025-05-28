[@filego/js](../README.md) / split

# Function: split()

```ts
function split(options): Promise<SplitResult>;
```

Defined in: [js/src/base/split.ts:58](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/split.ts#L58)

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
