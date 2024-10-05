# FileGo

A file splitting & merging solution.

## Installation

For JavaScript/TypeScript environment:

npm:

```bash
npm i @filego/js
```

Yarn:

```bash
yarn add @filego/js
```

pnpm:

```bash
pnpm add @filego/js
```

For Node environment:

npm:

```bash
npm i @filego/node
```

Yarn:

```bash
yarn add @filego/node
```

pnpm:

```bash
pnpm add @filego/node
```

## Quick Start

Split file from a path to a directory directly with `split` function in `@filego/node`.

```typescript
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

For the usage of `@filego/js`, please refer to [docs/js.md](./docs/js.md).

For the usage of `@filego/node`, please refer to [docs/node.md](./docs/node.md).

## Examples

Check out the Web and API examples:

For the example of web in React, please refer to [examples/web](./examples/web/).

For the example of Node in Fastify, please refer to [examples/node](./examples/node/).

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
