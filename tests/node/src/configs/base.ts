import * as path from "node:path";

import { searchFiles } from "@test/shared";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");
const cacheRoot: string = path.resolve(process.cwd(), ".media", "cache");
const outRoot: string = path.resolve(process.cwd(), ".media", "output");

// test

const inFiles: string[] = searchFiles({
    dir: inRoot,
});

// config

const chunkSize: number = 1 * 1024 * 1024;

export { inRoot, cacheRoot, outRoot, inFiles, chunkSize };
