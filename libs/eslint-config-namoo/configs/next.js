// @ts-check

import { FlatCompat } from "@eslint/eslintrc";

/**
 * This config includes:
 * - Enable recommended Typescript rules
 * - Enable recommended rules from Next.js
 */

const compat = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [...compat.extends("next/core-web-vitals", "next/typescript")];
