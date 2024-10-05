import * as path from "node:path";

import { searchFiles } from "@test/shared";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");

// test

const inFiles: string[] = searchFiles({
    dir: inRoot,
});

// config

const chunkSize: number = 1 * 1024 * 1024;

export { inRoot, inFiles, chunkSize };
