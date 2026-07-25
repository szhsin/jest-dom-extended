import { defineConfig } from 'rolldown';

export default defineConfig({
  external: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/matchers',
    'vitest',
    '@vitest/expect',
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
  transform: {
    target: ['node18'],
    assumptions: {
      noDocumentAll: true,
    },
  },
  input: ['src/index.ts', 'src/jest.ts', 'src/vitest.ts'],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      strict: true,
    },
    {
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
    },
  ],
});
