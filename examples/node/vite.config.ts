import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";

import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";

import build from "@hono/vite-build/node";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        devServer({
            entry: "./src/index.ts",
            adapter: nodeAdapter,
        }),
        build({
            port: 4000,
            entry: "./src/index.ts",
            minify: true,
            emptyOutDir: true,
        }),
    ],
    server: {
        port: 4001,
    },
});
