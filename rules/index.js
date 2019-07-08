const rulesEslint = require('./eslint');
const rulesPluginImport = require('./plugin-import');

module.exports = {
  ...rulesEslint,
  ...rulesPluginImport,
};
