// @ts-check
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  external: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/matchers',
    'vitest',
    '@vitest/expect',
  ],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
  input: ['src/index.ts', 'src/jest.ts', 'src/vitest.ts'],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      interop: 'auto',
      entryFileNames: '[name].cjs',
      preserveModules: true,
    },
    {
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
    },
  ],
};

export default config;
