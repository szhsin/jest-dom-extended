// @ts-check

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__tests__/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './src/jest.ts'],
  clearMocks: true,
  collectCoverage: true,
};

module.exports = config;
