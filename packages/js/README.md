# FileGo

A file splitting & merging solution.

## Quick Start

Split file from a path with `split` function.

```typescript
import { split } from "@filego/js";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
});
```

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
