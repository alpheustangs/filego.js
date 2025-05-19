[@filego/node](../README.md) / SplitOptions

# Type Alias: SplitOptions

```ts
type SplitOptions = _SplitOptions & object;
```

Defined in: [node/src/base/split.ts:24](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/node/src/base/split.ts#L24)

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
