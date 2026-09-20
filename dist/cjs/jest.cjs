"use strict";
const require_toHaveStyle = require("./matchers/toHaveStyle.cjs");
//#region src/jest.ts
expect.extend({ toHaveStyle: require_toHaveStyle.toHaveStyle });
//#endregion
