import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const isTest = process.env.VITEST === "true";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    !isTest && (await import("@tailwindcss/vite")).default(),
    !isTest &&
      (await import("@react-router/dev/vite")).then((m) => m.reactRouter()),
  ].filter(Boolean),
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    include: ["app/components/**/*.test.{ts,tsx}"],
    coverage: {
      reporter: ['text', 'html', 'json-summary'],
      all: true,
      exclude: ['**/test/**', '**/*.test.*', '**/node_modules/**'],
    },
  },
});
