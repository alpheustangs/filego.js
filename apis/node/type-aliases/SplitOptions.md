[@filego/node](../README.md) / SplitOptions

# Type Alias: SplitOptions

```ts
type SplitOptions = _SplitOptions & object;
```

Defined in: [node/src/base/split.ts:24](https://github.com/alpheus-day/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/node/src/base/split.ts#L24)

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
