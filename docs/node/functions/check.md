[@filego/node](../README.md) / check

# Function: check()

> **check**(`options`): `Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>

This function checks file integrity by verifying the chunks specified
in the `inDir` with `fileSize`, `totalChunks` parameters.
It will return the `status` and the `error` of the check.

### Example

```ts
import { check } from "@filego/node";

await check({
    inDir: "/path/to/dir",
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

## Parameters

• **options**: [`CheckOptions`](../type-aliases/CheckOptions.md)

## Returns

`Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>

## Defined in

[node/src/base/check.ts:46](https://github.com/alpheustangs/filego.js/blob/75c07655f62c9155e0e20706754cb14cbd642fe5/packages/node/src/base/check.ts#L46)
