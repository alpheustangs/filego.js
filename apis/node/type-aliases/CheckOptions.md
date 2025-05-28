[@filego/node](../README.md) / CheckOptions

# Type Alias: CheckOptions

```ts
type CheckOptions = _CheckOptions & object;
```

Defined in: [node/src/base/check.ts:22](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/node/src/base/check.ts#L22)

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
