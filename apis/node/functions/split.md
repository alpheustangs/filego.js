[@filego/node](../README.md) / split

# Function: split()

```ts
function split(options): Promise<SplitResult>;
```

Defined in: [node/src/base/split.ts:48](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/node/src/base/split.ts#L48)

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

### options

[`SplitOptions`](../type-aliases/SplitOptions.md)

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>
