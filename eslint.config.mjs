// @ts-check

import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  prettier,
  {
    files: ['**/*.?(c|m)js'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: [
      '**/coverage/',
      '**/dist/',
      '**/types/',
      '**/build/',
      '**/static/',
      '**/.next/',
      '**/.docusaurus/',
      '**/*.d.ts',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.?(c|m)js', 'examples/*.?(c|m)js'],
        },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest,
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_\\d?$' }],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  },
  {
    files: ['examples/**/*'],
    rules: {
      'no-console': 0,
    },
  },
);
