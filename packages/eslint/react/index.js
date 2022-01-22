require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@progressivestudio/eslint-config-ts",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
  ],
  plugins: ["simple-import-sort", "sort-keys-fix", "prettier", "react", "react-hooks"],
  rules: {
    // Base overrides
    "import/order": "off",
    "prefer-arrow-callback": "off",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-max-depth": [1, { max: 10 }],
    "react/jsx-no-literals": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "react/no-multi-comp": ["error", { ignoreStateless: false }],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
