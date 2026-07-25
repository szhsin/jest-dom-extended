"use strict";
const require_toHaveStyle = require("./matchers/toHaveStyle.cjs");
//#region src/vitest.ts
require("vitest").expect.extend({ toHaveStyle: require_toHaveStyle.toHaveStyle });
//#endregion
