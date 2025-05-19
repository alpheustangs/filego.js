[@filego/node](../README.md) / CheckOptions

# Type Alias: CheckOptions

```ts
type CheckOptions = _CheckOptions & object;
```

Defined in: [node/src/base/check.ts:22](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/node/src/base/check.ts#L22)

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
