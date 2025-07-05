import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/__tests__/**/*.test.[jt]s?(x)'],
    coverage: {
      provider: 'v8',
      enabled: true,
      reportsDirectory: './coverage/vitest',
      include: ['src/matchers/'],
    },
    setupFiles: ['@testing-library/jest-dom', './src/vitest.ts'],
  },
});
