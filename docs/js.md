# Usage of `@filego/js`

This documentation provides the usage of `@filego/js`.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @filego/js

# Yarn
yarn add @filego/js

# pnpm
pnpm add @filego/js
```

## Functions

`@filego/js` provides the following functions:

#### `split`

This function splits file into chunks, and the chunks can be used to check and merge later. It will return the `chunks`, `fileSize` and `totalChunks`.

```ts
import { split } from "@filego/js";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
});
```

#### `check`

This function checks file integrity by verifying the `chunks` with `fileSize` and `totalChunks` parameters. It will return the `status` and the `error` of the check.

```ts
import { check } from "@filego/js";

await check({
    chunks: [], // result from split function...
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

#### `merge`
 
This function merges the chunks by using the `chunks` parameters. It will return the `blob` of the merged file.

```ts
import { merge } from "@filego/js";

await merge({
    chunks: [], // result from split function...
});
```
