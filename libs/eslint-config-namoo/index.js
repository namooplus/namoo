// @ts-check

import importConfigs from "./configs/import.js";
import javascriptConfigs from "./configs/javascript.js";
import prettierConfigs from "./configs/prettier.js";
import reactConfigs from "./configs/react.js";
import typescriptConfigs from "./configs/typescript.js";

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
export default [
  ...javascriptConfigs,
  ...typescriptConfigs,
  ...importConfigs,
  ...reactConfigs,
  ...prettierConfigs,
];
