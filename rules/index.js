const rulesEslint = require('./eslint');
const rulesPluginImport = require('./plugin-import');
const rulesPluginReact = require('./plugin-react');

module.exports = {
  ...rulesEslint,
  ...rulesPluginImport,
  ...rulesPluginReact,
};
