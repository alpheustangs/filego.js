# FileGo

A file splitting & merging solution.

## Quick Start

Split file from a path to a directory directly with `split` function.

```ts
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

## License

This project is licensed under the terms of the MIT license.
