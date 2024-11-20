[@filego/js](../README.md) / check

# Function: check()

> **check**(`options`): `Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>

This function checks file integrity by verifying
the `chunks` with `fileSize` and `totalChunks` parameters.
It will return the `status` and the `error` of the check.

### Example

```ts
import { check } from "@filego/js";

await check({
    chunks: [], // result from split function...
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

## Parameters

• **options**: [`CheckOptions`](../type-aliases/CheckOptions.md)

## Returns

`Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>

## Defined in

[js/src/base/check.ts:48](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/js/src/base/check.ts#L48)
