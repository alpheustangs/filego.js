# FileGo

A file splitting & merging solution.

## Installation

For TypeScript / JavaScript environment:

```bash
# NPM
npm install @filego/ts

# Yarn
yarn add @filego/ts

# PNPM
pnpm add @filego/ts
```

For Node environment:

```bash
# NPM
npm install @filego/node

# Yarn
yarn add @filego/node

# PNPM
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

For the usage of `@filego/ts`, please refer to [docs/ts.md](./docs/ts.md).

For the usage of `@filego/node`, please refer to [docs/node.md](./docs/node.md).

## Examples

Check out the Web and API examples.

| Direcotry | Description             | Link                              |
| --------- | ----------------------- | --------------------------------- |
| Web       | Web example in React    | [examples/web](./examples/web/)   |
| Node      | Node example in Fastify | [examples/node](./examples/node/) |

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
