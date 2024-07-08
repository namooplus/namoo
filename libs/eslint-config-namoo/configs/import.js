// @ts-check

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const rc = new FlatCompat();

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [
  ...fixupConfigRules(rc.plugins("import")),
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["./*", "../*", "!./*.css"],
              message: "No relative imports",
            },
          ],
        },
      ],
      "import/first": "error",
      "import/newline-after-import": ["error", { considerComments: true }],
      "import/no-unresolved": "off",
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["index", "parent", "sibling"],
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
];
