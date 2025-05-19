[@filego/js](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [js/src/base/merge.ts:20](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/merge.ts#L20)

Options for the `merge` function.

## Type declaration

### mergeFunction()?

```ts
optional mergeFunction: (options) => 
  | MergeResult
| Promise<MergeResult>;
```

Custom merge function for the `merge` function.

#### Parameters

##### options

[`MergeFunctionOptions`](MergeFunctionOptions.md)

#### Returns

  \| [`MergeResult`](MergeResult.md)
  \| `Promise`\<[`MergeResult`](MergeResult.md)\>
