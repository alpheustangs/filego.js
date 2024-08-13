import { defineConfig } from "tsup";

export default defineConfig([
    {
        minify: true,
        platform: "node",
        format: "esm",
        tsconfig: "./tsconfig.esm.json",
        entry: {
            index: "./src/index.ts",
        },
        outDir: "./dist",
    },
    {
        dts: true,
        minify: true,
        platform: "node",
        format: "cjs",
        tsconfig: "./tsconfig.cjs.json",
        entry: {
            index: "./src/index.ts",
        },
        outDir: "./dist",
    },
]);
