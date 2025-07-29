import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import rollupReplace from '@rollup/plugin-replace';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/petrol-price-dashboard-source/' : '/',
    plugins: [
      rollupReplace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(mode)
        }
      }),
      react()
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './vitest.setup.ts',
      include: ['src/components/**/*.test.{ts,tsx}'],
      coverage: {
        reporter: ['text', 'html', 'json-summary'],
        all: true,
        exclude: ['**/test/**', '**/*.test.*', '**/node_modules/**']
      }
    }
  };
});
