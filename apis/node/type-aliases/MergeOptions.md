[@filego/node](../README.md) / MergeOptions

# Type Alias: MergeOptions

```ts
type MergeOptions = _MergeOptions & object;
```

Defined in: [node/src/base/merge.ts:14](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/node/src/base/merge.ts#L14)

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
