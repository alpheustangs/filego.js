import { defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    optimizeDeps: {
        exclude: ["@filego/js"],
    },
    test: {
        include: ["src/**/*.bench.{js,jsx,ts,tsx}"],
        environment: "happy-dom",
        testTimeout: 1000 * 60,
    },
});
