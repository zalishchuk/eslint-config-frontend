const chalk = require('chalk');
const rules = require('./rules');
const rulesListEslint = require('./data/eslint');
const rulesListPrettier = require('./data/plugin-prettier');
const rulesListImport = require('./data/plugin-import');
const rulesListDeprecated = require('./data/eslint-deprecated');
const rulesListRemoved = require('./data/eslint-removed');

const rulesList = Object.keys(rules);

const formatDocsLink = rule => {
  if (rule.startsWith('import/')) {
    const ruleName = rule.replace('import/', '');
    return `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${ruleName}.md`;
  }

  return `https://eslint.org/docs/rules/${rule}`;
};

const formatRulesList = rules =>
  rules
    .map(rule => chalk`- ${rule} ({blue.bold ${formatDocsLink(rule)}})`)
    .join('\n    ');

const filterValid = rules =>
  rules.filter(rule => {
    const isDeprecated = rulesListDeprecated.includes(rule);
    const isRemoved = rulesListRemoved.includes(rule);

    return !(isDeprecated || isRemoved);
  });

const filterUnconfirmed = rules =>
  Object.keys(rules).filter(rule => {
    const setting = rules[rule];
    const value = Array.isArray(setting) ? setting[0] : setting;
    return typeof value === 'number';
  });

const filterUnused = rules =>
  [...rulesListEslint, ...rulesListImport]
    .filter(rule => !rulesListPrettier.includes(rule))
    .filter(rule => typeof rules[rule] === 'undefined');

const count = filterValid([...rulesListEslint, ...rulesListImport]).length;
const countConfig = filterValid([...rulesList, ...rulesListPrettier]).length;
const countUnconfirmed = filterUnconfirmed(rules).length;
const countUnused = filterUnused(rules).length;
const countCoverage = Math.floor(
  ((countConfig - countUnconfirmed) / count) * 100
);

const listUnconfirmed = formatRulesList(filterUnconfirmed(rules));
const listUnused = formatRulesList(filterUnused(rules));

console.log(chalk`
  {white.bold ESLint rules count} - {green.bold ${count}}
  {white.bold Config rules count} - {green.bold ${countConfig}}

  {white.bold Rules coverage} - {cyan.bold ${countCoverage}%}
  
  {white.bold Unused rules count - {red.bold ${countUnused}}}
    ${listUnused}

  {white.bold Unconfirmed rules count} - {red.bold ${countUnconfirmed}}
    ${listUnconfirmed}
`);
