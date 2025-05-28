[@filego/js](../README.md) / CheckOptions

# Type Alias: CheckOptions

```ts
type CheckOptions = _CheckOptions & object;
```

Defined in: [js/src/base/check.ts:24](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/check.ts#L24)

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
