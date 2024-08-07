import * as path from "node:path";

import { getInputs } from "@test/shared";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");

// test

const fileNames: string[] = ["0b.txt", "50KB.txt", "2MB.txt", "4MB.txt"];

const inFiles: string[] = getInputs({
    dir: inRoot,
    fileNames,
});

// config

const chunkSize: number = 1 * 1024 * 1024;

export { inRoot, fileNames, inFiles, chunkSize };
