# FileGo

A solution for splitting, checking and merging files.

## Quick Start

Split file from a path to a directory directly with `split` function.

```typescript
import { split } from "@filego/node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
