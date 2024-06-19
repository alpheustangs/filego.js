# FileGo

Solution for splitting, checking and merging files.

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

This function splits file into chunks, and the chunks can be used to check and merge later. It will return the `chunks`, `fileSize` and `totalChunks`.

```typescript
import { split } from "@filego/ts";

await split({
    file: File,
    chunkSize: 1 * 1024 * 1024, // 1MB
});
```

#### `check`

This function checks file integrity by verifying the `chunks` with `fileSize` and `totalChunks` parameters. It will return the `status` and the `error` of the check.

```typescript
import { check } from "@filego/ts";

await check({
    chunks: [], // result from split function...
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

#### `merge`
 
This function merges the chunks by using the `chunks` parameters. It will return the `blob` and `buffer` of the merged file.

```typescript
import { merge } from "@filego/ts";

await merge({
    chunks: [], // result from split function...
});
```

## Usage Of `@filego/node`

Usage of different functions in `@filego/node`:

#### `split`

This function splits file from a path to a directory directly. It will only return the `fileSize` and the `totalChunks` of the file.

```typescript
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 1 * 1024 * 1024,
});
```

#### `check`

This function checks file integrity by verifying the chunks specified in the `inDir` with `fileSize`, `totalChunks` parameters. It will return the `status` and the `error` of the check.

```typescript
import { check } from "@filego/node";

await check({
    inDir: "/path/to/dir",
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

#### `merge`

This function merges the chunks from a directory to a specified path directly. Therefore, nothing will be returned as a result.

```typescript
import { merge } from "@filego/node";

await merge({
    inDir: "/path/to/dir",
    outFile: "/path/to/file.txt",
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
