import { toHaveStyle } from "./matchers/toHaveStyle.mjs";
import { expect } from "vitest";
// src/vitest.ts
expect.extend({ toHaveStyle });
