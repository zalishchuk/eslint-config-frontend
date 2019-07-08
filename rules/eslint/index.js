const node = require('./node');
const bestPractices = require('./best-practices');
const ecmascript6 = require('./ecmascript-6');
const possibleErrors = require('./possible-errors');
const stylisticIssues = require('./stylistic-issues');
const variables = require('./variables');
const strict = require('./strict');

module.exports = {
  ...node,
  ...bestPractices,
  ...ecmascript6,
  ...possibleErrors,
  ...stylisticIssues,
  ...variables,
  ...strict,
};
