import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020, // TODO: decide which version is ok? es2020 or es2022
      },
    },
    rules: {},
  },
  {
    ignores: ['.vscode/*', 'node_modules/*', 'public/*', 'dist/*'],
  },
  {
    extends: 'eslint:recommended',
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
      },
    ],
  },
];
