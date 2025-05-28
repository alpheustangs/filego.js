[@filego/node](../README.md) / SplitOptions

# Type Alias: SplitOptions

```ts
type SplitOptions = _SplitOptions & object;
```

Defined in: [node/src/base/split.ts:24](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/node/src/base/split.ts#L24)

Options for the `split` function.

## Type declaration

### splitFunction()?

```ts
optional splitFunction: (options) => 
  | SplitResult
| Promise<SplitResult>;
```

Custom split function for `split` function.

#### Parameters

##### options

[`SplitFunctionOptions`](SplitFunctionOptions.md)

#### Returns

  \| [`SplitResult`](SplitResult.md)
  \| `Promise`\<[`SplitResult`](SplitResult.md)\>
