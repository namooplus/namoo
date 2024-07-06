// @ts-check

import prettierLintRecommendedConfig from "eslint-plugin-prettier/recommended";

/**
 * Disable all eslint rules that conflict with prettier rules (eslint-config-prettier)
 * and enable prettier rules parsed from a prettier configuration file as eslint rules. (eslint-plugin-prettier)
 */

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [prettierLintRecommendedConfig];
