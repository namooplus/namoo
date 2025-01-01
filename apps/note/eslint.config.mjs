import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import jsLint from '@eslint/js';
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  jsLint.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierRecommendedConfig,
];

export default eslintConfig;
