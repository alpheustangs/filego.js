# FileGo

Solution for splitting, checking, and merging files.

## Install

For TypeScript / JavaScript environment:

```bash
npm i @filego/ts
```

For Node environment:

```bash
npm i @filego/node
```

## Usage Of `@filego/ts`

Usage of different functions in `@filego/ts`:

#### `split`

Split files into chunks, and the chunks can be used to check and merge later. It will return the `fileSize`, `totalChunks` and the `chunks`.

```typescript
import { split } from "@filego/ts";

await split({
    file: File,
    chunkSize: 1 * 1024 * 1024, // 1MB
});
```

#### `check`

Check file integrity by verifying the `chunks` with `fileSize` and `totalChunks` parameters. It will return the `status` and the `error` of the check.

```typescript
import { check } from "@filego/ts";

await check({
    chunks: [ /* ... */ ],
    fileSize: 123456789,
    totalChunks: 10,
});
```

#### `merge`
 
Merge the chunks by using the `chunks` parameters. It will return the `blob` and `buffer` of the merged file.

```typescript
import { merge } from "@filego/ts";

await merge({
    chunks: [ /* ... */ ],
});
```

## Usage Of `@filego/node`

Usage of different functions in `@filego/node`:

#### `split`

Split files from a file path to a directory directly. It will only return the `fileSize` and the `totalChunks` of the file.

```typescript
import { split } from "@filego/node";

await split({
    inPath: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 1 * 1024 * 1024,
});
```

#### `check`

Check file integrity by verifying the the chunks specified in the `inDir` with `fileSize`, `totalChunks` parameters. It will return the `status` and the `error` of the check.

```typescript
import { check } from "@filego/node";

await check({
    inDir: "/path/to/dir",
    fileSize: 123456789,
    totalChunks: 10,
});
```

#### `merge`

Merge the chunks from a directory to a specified path directly. Therefore, nothing will be returned.

```typescript
import { merge } from "@filego/node";

await merge({
    inDir: "/path/to/dir",
    outPath: "/path/to/file.txt",
});
```

## Examples

Check out the Web and API examples.

| Direcotry | Description             | Link                     |
| --------- | ----------------------- | ------------------------ |
| Web       | Web example in React    | [web](./examples/web/)   |
| Node      | Node example in Fastify | [node](./examples/node/) |

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
