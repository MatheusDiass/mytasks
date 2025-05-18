import globals from 'globals';
import tseslint from 'typescript-eslint';
import { config } from '@repo/eslint-config/base';

export default [
  ...config,
  {
    ignores: ['node_modules', 'dist', '**/*.config.*'],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      eqeqeq: 'error',
      semi: ['error', 'always'],
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-duplicate-imports': 'error',
      'no-func-assign': 'error',
      'no-undef': 'error',
      camelcase: 'error',
      'no-console': 'error',
      'no-empty': 'error',
      'no-global-assign': 'error',
      'no-multi-assign': 'error',
      'no-proto': 'error',
      'no-void': 'error',
      'no-multiple-empty-lines': 'warn',
      'no-mixed-spaces-and-tabs': 'warn',
      'prefer-template': 'error',
      'object-shorthand': ['error', 'always'],
      'no-var': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-useless-catch': 'warn',

      // TypeScript-Specific Rules
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': ['warn'],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
    },
  },
];
