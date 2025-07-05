# jest-dom-extended

> Extend and patch @testing-library/jest-dom matchers

[![NPM](https://img.shields.io/npm/v/jest-dom-extended.svg)](https://www.npmjs.com/package/jest-dom-extended) [![bundlephobia](https://img.shields.io/bundlephobia/minzip/jest-dom-extended)](https://bundlephobia.com/package/jest-dom-extended)

## What does this do?

- Patches the `toHaveStyle` color mismatch issue ([#350](https://github.com/testing-library/jest-dom/issues/350))
- Provides a drop-in update that avoids changes to test files, making it easy to remove once the issue in `@testing-library/jest-dom` is fixed in the future.

## Install

```bash
npm install -D jest-dom-extended
```

## Usage

### Jest

```json
{
  "setupFilesAfterEnv": ["@testing-library/jest-dom", "jest-dom-extended/jest"]
}
```

### Vitest

```js
export default defineConfig({
  test: {
    setupFiles: ["@testing-library/jest-dom", "jest-dom-extended/vitest"],
  },
});
```
