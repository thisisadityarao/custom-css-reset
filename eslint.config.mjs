import js from '@eslint/js';
import globals from 'globals';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, eslintPluginPrettierRecommended },
    extends: [
      js.configs.recommended,
      ...eslintPluginPrettierRecommended.configs.recommended,
    ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
]);
