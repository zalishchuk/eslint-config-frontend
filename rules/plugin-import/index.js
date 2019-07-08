const helpfulWarnings = require('./helpful-warnings');
const moduleSystems = require('./module-systems');
const staticAnalysis = require('./static-analysis');
const styleGuide = require('./style-guide');

module.exports = {
  ...helpfulWarnings,
  ...moduleSystems,
  ...staticAnalysis,
  ...styleGuide,
};
