// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

const rc = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [
  ...rc.extends("plugin:react-hooks/recommended"),
  {
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
  },
];
