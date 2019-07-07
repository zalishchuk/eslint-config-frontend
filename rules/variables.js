const confusingBrowserGlobals = require('confusing-browser-globals');
module.exports = {
  'init-declarations': 0,
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
  'no-shadow': 'error',
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
};
