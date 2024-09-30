# Usage of `@filego/node`

This documentation provides the usage of `@filego/node`.

## Installation

Install `@filego/node` as a dependency:

```bash
# NPM
npm install @filego/node

# Yarn
yarn add @filego/node

# PNPM
pnpm add @filego/node
```

## Functions

`@filego/node` provides the following functions:

#### `split`

This function splits file from a path to a directory directly. It will only return the `fileSize` and the `totalChunks` of the file.

```typescript
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
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
