module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'prettier',
  ],
  extends: ['react-app', 'prettier'],
  rules: {
    'jsx-quotes': [1, 'prefer-double'],
    'jest/consistent-test-it': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-spacing': [2, { when: 'never', allowMultiline: true }],
    'react/jsx-sort-props': ['warn', { callbacksLast: true }],
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'off', //потом (warn) включить и проверить!
    'react-hooks/rules-of-hooks': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react$/',
          'module',
          [
            '/^utils/',
            '/^common/',
            '/^component/',
            '/^routes/',
            '/^containers/',
          ],
          ['parent', 'sibling', 'index'],
          '/scss$/',
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'max-len': 'off',
    'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
    'no-alert': 'warn',
    'no-debugger': 'warn',
    'object-curly-spacing': ['off'],
    'default-case': 'off',
    'no-extra-boolean-cast': 'off',
    curly: ['error', 'all'],
    'arrow-parens': 'off',

    semi: 'off',
    camelcase: ['off'],
    'arrow-spacing': 'error',
    'default-param-last': 'off',
    'dot-notation': [2, { allowPattern: '^[a-z]' }],
    'explicit-member-accessibility': 'off',
    'no-useless-constructor': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'switch-colon-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    yoda: ['error', 'never'],
    'max-params': [
      'error',
      {
        max: 12,
      },
    ],
    'comma-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
  },
};
