// @ts-check

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import jsxA11yLint from "eslint-plugin-jsx-a11y";
import reactRecommendedConfig from "eslint-plugin-react/configs/recommended.js";

const rc = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [
  reactRecommendedConfig,
  ...fixupConfigRules(rc.extends("plugin:react-hooks/recommended")),
  jsxA11yLint.flatConfigs.recommended,
  {
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react-refresh/only-export-components": "warn",
    },
  },
];
