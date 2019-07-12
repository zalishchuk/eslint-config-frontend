const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    /**
     * Node.js and CommonJS
     *
     * @see https://eslint.org/docs/rules/#nodejs-and-commonjs
     */

    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    /**
     * Best Practices
     *
     * @see https://eslint.org/docs/rules/#best-practices
     */

    'accessor-pairs': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 0,
    complexity: 0,
    'consistent-return': 0,
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'max-classes-per-file': 0,
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 0,
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 0,
    'no-implicit-globals': 0,
    'no-implied-eval': 'error',
    'no-invalid-this': 0,
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 2,
    'no-loop-func': 'error',
    'no-magic-numbers': 0,
    'no-multi-str': 'error',
    'no-new': 0,
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 0,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 'error',
    'no-self-assign': [2, { props: false }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 0,
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 0,
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    yoda: 'error',

    /**
     * Possible Errors
     *
     * @see https://eslint.org/docs/rules/#possible-errors
     */

    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': [1, { allow: ['error'] }],
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 2,
    'no-func-assign': 'error',
    'no-inner-declarations': 2,
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 0,
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 0,
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /**
     * Strict Mode
     *
     * @see https://eslint.org/docs/rules/#strict-mode
     */

    strict: ['error', 'never'],

    /**
     * Variables
     *
     * @see https://eslint.org/docs/rules/#varibles
     */

    'init-declarations': 0,
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
    'no-shadow': 0,
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'no-use-before-define': 'error',

    /**
     * Stylistic issues
     *
     * @see https://eslint.org/docs/rules/#stylistic-issues
     */

    camelcase: [2, { properties: 'never' }],
    'capitalized-comments': 'off',
    'consistent-this': 'off',
    'func-name-matching': 'off',
    'func-names': 2,
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': 'error',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 0,
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 0,
    'no-multi-assign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 0,
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': 0,
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',

    /**
     * ECMAScript 6
     *
     * @see https://eslint.org/docs/rules/#ecmascript-6
     */

    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
        avoidExplicitReturnArrows: false,
      },
    ],
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': 0,
    'symbol-description': 'error',
  },
};
