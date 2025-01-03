// @ts-check

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

/**
 * This config includes:
 * - Enable recommended React rules (eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y)
 * - Enable recommended Typescript rules (typescript-eslint)
 * - Enable recommended rules by Next.js
 *
 * @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray}
 */
export default [...compat.extends("next/core-web-vitals", "next/typescript")];
