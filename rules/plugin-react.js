module.exports = {
  plugins: ['react', 'react-hooks'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: {
    react: { version: 'detect' },
    // TODO: confirm a list of link components alternatives
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  rules: {
    /**
     * Rules of hooks
     *
     * @see https://www.npmjs.com/package/eslint-plugin-react-hooks
     */

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    /**
     * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
     */

    'react/boolean-prop-naming': 0,
    'react/button-has-type': [
      'error',
      { button: true, submit: true, reset: false },
    ],
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],
    'react/destructuring-assignment': 0,
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 2,
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-will-update-set-state': 0,
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['warn', { checkAliases: true }],
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 0,
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 0,
    'react/sort-prop-types': 0,
    'react/state-in-constructor': [2, 'never'],
    'react/static-property-placement': 0,
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    /**
     * JSX-specific rules
     *
     * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
     */

    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-key': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
