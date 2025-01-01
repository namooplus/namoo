// @ts-check

import javascriptConfigs from "../configs/javascript.js";
import nextConfigs from "../configs/next.js";
import prettierConfigs from "../configs/prettier.js";

/**
 * ESLint configuration for Next.js projects
 *
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [...javascriptConfigs, ...nextConfigs, ...prettierConfigs];
