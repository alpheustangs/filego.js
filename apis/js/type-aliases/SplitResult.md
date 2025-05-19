[@filego/js](../README.md) / SplitResult

# Type Alias: SplitResult

```ts
type SplitResult = object;
```

Defined in: [js/src/base/split.ts:19](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/split.ts#L19)

Result of the `split` function.

## Properties

### chunks

```ts
chunks: FileChunk[];
```

Defined in: [js/src/base/split.ts:21](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/split.ts#L21)

The chunks splitted from the original file.

***

### fileSize

```ts
fileSize: number;
```

Defined in: [js/src/base/split.ts:23](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/split.ts#L23)

Size of the original file.

***

### totalChunks

```ts
totalChunks: number;
```

Defined in: [js/src/base/split.ts:25](https://github.com/alpheustangs/filego.js/blob/2a25fe3fdc1a0816f27fbb873f77aac511984242/packages/js/src/base/split.ts#L25)

The total number of chunks splitted from the original file.
