[@filego/js](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<MergeResult>;
```

Defined in: [js/src/base/merge.ts:42](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/merge.ts#L42)

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
