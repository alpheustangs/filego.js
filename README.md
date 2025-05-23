# FileGo

A file splitting & merging solution.

## Installation

For JavaScript/TypeScript environment:

```sh
# npm
npm i @filego/js

# Yarn
yarn add @filego/js

# pnpm
pnpm add @filego/js
```

For Node environment:

```sh
# npm
npm i @filego/node

# Yarn
yarn add @filego/node

# pnpm
pnpm add @filego/node
```

## Quick Start

Split file from a path to a directory directly with `split` function in `@filego/node`.

```ts
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

## APIs

For the JS package APIs,
please refer to the [JS APIs](./apis/js/README.md).

For the Node package APIs,
please refer to the [Node APIs](./apis/node/README.md).

## Examples

Check out the Web and API examples:

For the example of web in React, please refer to [examples/web](./examples/web/).

For the example of Node in Hono, please refer to [examples/node](./examples/node/).

## License

This project is licensed under the terms of the MIT license.
