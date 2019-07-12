module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        /**
         * Conflicting rules which are handled or recommended by TypeScript itself
         *
         * @see https://github.com/typescript-eslint/typescript-eslint/issues/477
         */

        'no-undef': 'off',
        'no-var': 'off',
        'prefer-const': 'off',
        'prefer-rest-params': 'off',
        'no-prototype-builtins': 'off',
        'no-dupe-class-members': 'off',
        'default-case': 'off',

        /**
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
         */

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [2, 'array-simple'],
        '@typescript-eslint/await-thenable': 0,
        // '@typescript-eslint/await-thenable': 2,
        '@typescript-eslint/ban-ts-ignore': 2,
        '@typescript-eslint/ban-types': 0,
        camelcase: 0,
        '@typescript-eslint/camelcase': [2, { properties: 'never' }],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-definitions': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/generic-type-naming': 0,
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
          2,
          { allow: ['arrowFunctions', 'functions', 'methods'] },
        ],
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-explicit-any': [0, { ignoreRestArgs: false }],
        '@typescript-eslint/no-extraneous-class': 0,
        // '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 0,
        'no-magic-numbers': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': [
          'error',
          { allowDeclarations: false, allowDefinitionFiles: false },
        ],
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-this-alias': [
          'error',
          { allowDestructuring: true },
        ],
        '@typescript-eslint/no-type-alias': 0,
        // '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        // '@typescript-eslint/no-unnecessary-type-assertion': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            caughtErrors: 'none',
          },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { typedefs: false },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 0,
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-readonly': 0,
        // '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 0,
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/require-array-sort-compare': 0,
        // '@typescript-eslint/restrict-plus-operands': 2,
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        // '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ],
};
