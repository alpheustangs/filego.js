[@filego/js](../README.md) / CheckOptions

# Type Alias: CheckOptions

```ts
type CheckOptions = _CheckOptions & object;
```

Defined in: [js/src/base/check.ts:24](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/check.ts#L24)

Options for the `check` function.

## Type declaration

### checkFunction()?

```ts
optional checkFunction: (options) => 
  | CheckResult
| Promise<CheckResult>;
```

Custom check function for the `check` function.

#### Parameters

##### options

[`CheckFunctionOptions`](CheckFunctionOptions.md)

#### Returns

  \| [`CheckResult`](CheckResult.md)
  \| `Promise`\<[`CheckResult`](CheckResult.md)\>
