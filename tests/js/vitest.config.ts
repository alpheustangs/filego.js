import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: ["@filego/js"],
    },
    test: {
        include: ["src/tests/**/*.test.{js,jsx,ts,tsx}"],
        environment: "jsdom",
        root: process.cwd(),
        testTimeout: 1000 * 60,
        maxConcurrency: 1,
        bail: 1,
    },
});
