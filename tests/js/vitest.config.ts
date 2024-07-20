import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        root: process.cwd(),
        environment: "jsdom",
        maxConcurrency: 1,
        bail: 1,
        include: ["src/tests/**/*.test.{js,jsx,ts,tsx}"],
        testTimeout: 1000 * 60,
    },
});
