[@filego/js](../README.md) / SplitOptions

# Type Alias: SplitOptions

```ts
type SplitOptions = _SplitOptions & object;
```

Defined in: [js/src/base/split.ts:29](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/split.ts#L29)

Options for the `split` function.

## Type declaration

### splitFunction()?

```ts
optional splitFunction: (options) => 
  | SplitResult
| Promise<SplitResult>;
```

Custom split function for the `split` function.

#### Parameters

##### options

[`SplitFunctionOptions`](SplitFunctionOptions.md)

#### Returns

  \| [`SplitResult`](SplitResult.md)
  \| `Promise`\<[`SplitResult`](SplitResult.md)\>
