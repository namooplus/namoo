// @ts-check

import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

/**
 * This config includes:
 * - Disable all eslint rules that conflict with prettier rules (eslint-config-prettier)
 * - Enable prettier rules parsed from a prettier configuration file as eslint rules. (eslint-plugin-prettier)
 *
 * @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray}
 */
export default [prettierRecommendedConfig];
