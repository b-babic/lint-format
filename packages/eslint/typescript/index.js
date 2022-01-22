require("@rushstack/eslint-patch/modern-module-resolution");
const basic = require("@progressivestudio/eslint-config-base");

module.exports = {
  extends: ["@progressivestudio/eslint-config-base", "plugin:@typescript-eslint/recommended"],
  overrides: [
    ...basic.overrides,
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
    "@typescript-eslint/type-annotation-spacing": ["error", {}],
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports", disallowTypeAnnotations: false }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // Override JS
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    // off
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
