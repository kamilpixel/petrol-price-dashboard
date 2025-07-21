import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

const isTest = process.env.VITEST === "true";
let pluginList = (isTest) ? [tsconfigPaths(), react()] : [tailwindcss(), reactRouter(), tsconfigPaths()];

export default defineConfig({
  plugins: pluginList,
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
