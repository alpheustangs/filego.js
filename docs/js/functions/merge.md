[@filego/js](../README.md) / merge

# Function: merge()

> **merge**(`options`): `Promise`\<[`MergeResult`](../type-aliases/MergeResult.md)\>

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

• **options**: [`MergeOptions`](../type-aliases/MergeOptions.md)

## Returns

`Promise`\<[`MergeResult`](../type-aliases/MergeResult.md)\>

## Defined in

[js/src/base/merge.ts:41](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/js/src/base/merge.ts#L41)
