// @ts-check

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

const rc = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [
  ...fixupConfigRules(rc.extends("plugin:react-hooks/recommended")),
  {
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
  },
];
