import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-param-reassign': 'off',
      'no-console': ['error', {
        allow: ['warn', 'error']
      }],
      camelcase: 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'next',
        },
      ],
    },
  },
]);
