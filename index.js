/**
 * Rules which are marked with `number` value are unconfirmed and
 * require discussion or confirmation.
 *
 * These rules are marked with `number` instead of `string` so
 * script can differ them.
 */

module.exports = {
  extends: [
    require.resolve('./rules/eslint'),
    require.resolve('./rules/plugin-import'),
  ],
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
};
