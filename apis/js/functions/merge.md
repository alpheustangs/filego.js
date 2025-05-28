[@filego/js](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<MergeResult>;
```

Defined in: [js/src/base/merge.ts:42](https://github.com/alpheusday/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/js/src/base/merge.ts#L42)

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
