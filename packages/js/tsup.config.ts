import type { Options } from "tsup";

import { defineConfig } from "tsup";

const options: Options = {
    entry: {
        index: "./src/index.ts",
    },
    sourcemap: true,
    outDir: "./dist",
    platform: "neutral",
};

export default defineConfig([
    {
        ...options,
        format: "esm",
        tsconfig: "./tsconfig.json",
    },
    {
        ...options,
        format: "cjs",
        dts: true,
        tsconfig: "./tsconfig.cjs.json",
    },
]);
