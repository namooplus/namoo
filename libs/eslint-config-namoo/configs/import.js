// @ts-check

import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

/**
 * This config includes:
 * - Enable recommended importing rules
 * - Enable recommended import sorting rules
 *
 * @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray}
 */
export default [
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "import/first": "error",
      "import/newline-after-import": ["error", { considerComments: true }],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
];
