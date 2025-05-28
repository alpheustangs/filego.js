[@filego/node](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [node/src/base/merge.ts:14](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/node/src/base/merge.ts#L14)

Options for the `merge` function.

## Type declaration

### mergeFunction()?

```ts
optional mergeFunction: (options) => void | Promise<void>;
```

Custom merge function for the `merge` function.

#### Parameters

##### options

[`MergeFunctionOptions`](MergeFunctionOptions.md)

#### Returns

`void` \| `Promise`\<`void`\>
