// @ts-check

import { FlatCompat } from "@eslint/eslintrc";

/**
 * This config includes:
 * - Enable recommended rules from eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y
 * - Enable recommended Typescript rules
 * - Enable recommended rules by Next.js
 */

const compat = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [...compat.extends("next/core-web-vitals", "next/typescript")];
