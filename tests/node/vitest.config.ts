import { defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    optimizeDeps: {
        exclude: ["@filego/node"],
    },
    test: {
        include: ["src/tests/**/*.test.{js,jsx,ts,tsx}"],
        environment: "node",
        testTimeout: 1000 * 60,
    },
});
