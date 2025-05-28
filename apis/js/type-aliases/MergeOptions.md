[@filego/js](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [js/src/base/merge.ts:20](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/merge.ts#L20)

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
