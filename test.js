const chalk = require('chalk');
const rules = require('./rules');
const rulesEslint = require('./data/eslint');
const rulesPrettier = require('./data/prettier');
const rulesDeprecated = require('./data/eslint-deprecated');
const rulesRemoved = require('./data/eslint-removed');

const formatDocsLink = rule => `https://eslint.org/docs/rules/${rule}`;

const filterUnconfirmed = rules =>
  Object.keys(rules).filter(rule => {
    const setting = rules[rule];
    const value = Array.isArray(setting) ? setting[0] : setting;
    return typeof value === 'number';
  });

const filterUsed = rules =>
  rules.filter(rule => {
    const isDeprecated = rulesDeprecated.includes(rule);
    const isRemoved = rulesRemoved.includes(rule);

    return !(isDeprecated || isRemoved);
  });

const countEslint = filterUsed(rulesEslint).length;
const countUnconfirmed = filterUnconfirmed(rules).length;
const count =
  filterUsed(Object.keys(rules)).length + filterUsed(rulesPrettier).length;
const countCoverage = Math.floor(
  ((count - countUnconfirmed) / countEslint) * 100
);
const listUnconfirmed = filterUnconfirmed(rules)
  .map(rule => chalk`- ${rule} ({blue.bold ${formatDocsLink(rule)}})`)
  .join('\n    ');

console.log(chalk`
  {white.bold Config rules count} - {green.bold ${count}}
  {white.bold ESLint rules count} - {green.bold ${countEslint}}

  {white.bold Rules coverage} - {yellow.bold ${countCoverage}%}
  {white.bold Unconfirmed rules count} - {red.bold ${countUnconfirmed}}
    ${listUnconfirmed}
`);
