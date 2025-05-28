[@filego/js](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<MergeResult>;
```

Defined in: [js/src/base/merge.ts:42](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/merge.ts#L42)

This function merges the chunks by using the `chunks` parameters.

It will return the `blob` of the merged file.

### Example

```ts
import { merge } from "@filego/js";

await merge({
    chunks: [], // result from split function...
});
```

## Parameters

### options

[`MergeOptions`](../type-aliases/MergeOptions.md)

## Returns

`Promise`\<[`MergeResult`](../type-aliases/MergeResult.md)\>
