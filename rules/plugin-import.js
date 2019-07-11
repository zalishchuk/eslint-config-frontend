module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.json'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
    },
    'import/ignore': [
      'node_modules',
      // '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /**
     * Static analysis
     *
     * @see https://github.com/benmosher/eslint-plugin-import#static-analysis
     */

    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 2,
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': [2, { noUselessIndex: true }],
    'import/no-useless-path-segments': 2,
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 0,

    /**
     * Helpful warnings
     *
     * @see https://github.com/benmosher/eslint-plugin-import#module-systems
     */

    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',

    /**
     * Module systems
     *
     * @see https://github.com/benmosher/eslint-plugin-import#module-systems
     */

    'import/unambiguous': 'off',
    'import/no-commonjs': [
      0,
      { allowRequire: true, allowPrimitiveModules: true },
    ],
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    /**
     * Style guide
     *
     * @see https://github.com/benmosher/eslint-plugin-import#style-guide
     */

    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      2,
      'ignorePackages',
      { js: 'never', mjs: 'never', jsx: 'never' },
    ],
    'import/order': 0,
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 0,
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 0,
  },
};
