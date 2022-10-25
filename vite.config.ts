import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    commonjsOptions: {
      include: [],
    },
  },
  define: {
    "process.env.NODE_DEBUG": "false",
    global: "globalThis",
  },
  optimizeDeps: {
    disabled: false,

    esbuildOptions: {
      target: "es2020",
    },
  },
});
