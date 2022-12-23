const REPO_URL = "https://github.com/progressivestudio/configurations";
const DEFAULT_IMPORT = Symbol("default");
const NAMESPACE_IMPORT = Symbol("namespace");

function docsUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint/docs/rules/${ruleName}.md`;
}

module.exports = {
  docsUrl,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
};
