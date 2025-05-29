# FileGo

A file splitting & merging solution.

## Quick Start

Split file into chunks with `split` function:

```ts
import { split } from "@filego/js";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
});
```

## License

This project is licensed under the terms of the MIT license.
