[@filego/js](../README.md) / check

# Function: check()

```ts
function check(options): Promise<CheckResult>;
```

Defined in: [js/src/base/check.ts:49](https://github.com/alpheus-day/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/js/src/base/check.ts#L49)

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

### options

[`CheckOptions`](../type-aliases/CheckOptions.md)

## Returns

`Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>
