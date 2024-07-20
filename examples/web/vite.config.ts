import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    optimizeDeps: {
        include: ["@filego/js"],
    },
    server: {
        port: 3001,
    },
    preview: {
        port: 3000,
    },
    plugins: [react()],
});
