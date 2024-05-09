import * as path from "node:path";

import { getInputs } from "@test/shared";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");
const cacheRoot: string = path.resolve(process.cwd(), ".media", "cache");
const outRoot: string = path.resolve(process.cwd(), ".media", "output");

// test

const fileNames: string[] = ["0b.txt", "50KB.txt", "2MB.txt", "4MB.txt"];

const inPaths: string[] = getInputs({
    dir: inRoot,
    fileNames,
});

// config

const chunkSize: number = 2 * 1024 * 1024;

export { inRoot, cacheRoot, outRoot, fileNames, inPaths, chunkSize };
