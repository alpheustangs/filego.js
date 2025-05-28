[@filego/js](../README.md) / SplitResult

# Type Alias: SplitResult

```ts
type SplitResult = object;
```

Defined in: [js/src/base/split.ts:19](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/split.ts#L19)

Result of the `split` function.

## Properties

### chunks

```ts
chunks: FileChunk[];
```

Defined in: [js/src/base/split.ts:21](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/split.ts#L21)

The chunks splitted from the original file.

***

### fileSize

```ts
fileSize: number;
```

Defined in: [js/src/base/split.ts:23](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/split.ts#L23)

Size of the original file.

***

### totalChunks

```ts
totalChunks: number;
```

Defined in: [js/src/base/split.ts:25](https://github.com/alpheusday/filego.js/blob/1095b0b506cd20e40c6b51a386af0e8a45d893fb/packages/js/src/base/split.ts#L25)

The total number of chunks splitted from the original file.
