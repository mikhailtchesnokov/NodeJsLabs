import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules"], // adjust as needed
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  prettier,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",

      },
      globals: {
        ...globals.es2020, // ✅ works, includes ES2020 too
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      // Example overrides
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
