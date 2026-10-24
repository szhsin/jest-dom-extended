"use strict";
const require_toHaveStyle = require("./matchers/toHaveStyle.cjs");
// src/jest.ts
expect.extend({ toHaveStyle: require_toHaveStyle.toHaveStyle });
