[@filego/js](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [js/src/base/merge.ts:20](https://github.com/alpheusday/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/js/src/base/merge.ts#L20)

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
