[@filego/node](../README.md) / CheckOptions

# Type Alias: CheckOptions

```ts
type CheckOptions = _CheckOptions & object;
```

Defined in: [node/src/base/check.ts:22](https://github.com/alpheusday/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/node/src/base/check.ts#L22)

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
