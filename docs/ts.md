# Usage of `@filego/ts`

This documentation provides the usage of `@filego/ts`.

## Installation

Install `@filego/ts` as a dependency:

```bash
# NPM
npm install @filego/ts

# Yarn
yarn add @filego/ts

# PNPM
pnpm add @filego/ts
```

## Functions

`@filego/ts` provides the following functions:

#### `split`

This function splits file into chunks, and the chunks can be used to check and merge later. It will return the `chunks`, `fileSize` and `totalChunks`.

```typescript
import { split } from "@filego/ts";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
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