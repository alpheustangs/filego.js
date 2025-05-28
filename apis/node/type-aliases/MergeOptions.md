[@filego/node](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [node/src/base/merge.ts:14](https://github.com/alpheus-day/filego.js/blob/0b6198ac40a1ab78f90e02a6ab2598047e19ad06/packages/node/src/base/merge.ts#L14)

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
