module.exports = {
  rules: {
    "binary-assignment-parens": require("./lib/rules/binary-assignment-parens"),
    "images-no-direct-imports": require("./lib/rules/images-no-direct-imports"),
    "jest/no-all-mocks-methods": require("./lib/rules/jest/no-all-mocks-methods"),
    "jest/no-snapshots": require("./lib/rules/jest/no-snapshots"),
    "jsx-no-complex-expressions": require("./lib/rules/jsx-no-complex-expressions"),
    "jsx-no-hardcoded-content": require("./lib/rules/jsx-no-hardcoded-content"),
    "jsx-prefer-fragment-wrappers": require("./lib/rules/jsx-prefer-fragment-wrappers"),
    "no-ancestor-directory-import": require("./lib/rules/no-ancestor-directory-import"),
    "no-debugger": require("./lib/rules/no-debugger"),
    "no-namespace-imports": require("./lib/rules/no-namespace-imports"),
    "no-useless-computed-properties": require("./lib/rules/no-useless-computed-properties"),
    "prefer-early-return": require("./lib/rules/prefer-early-return"),
    "prefer-module-scope-constants": require("./lib/rules/prefer-module-scope-constants"),
    "react-hooks-strict-return": require("./lib/rules/react-hooks-strict-return"),
    "react-require-autocomplete": require("./lib/rules/react-require-autocomplete"),
    "restrict-full-import": require("./lib/rules/restrict-full-import"),
    "strict-component-boundaries": require("./lib/rules/strict-component-boundaries"),
    "typescript/prefer-pascal-case-enums": require("./lib/rules/typescript/prefer-pascal-case-enums"),
    "typescript/prefer-singular-enums": require("./lib/rules/typescript/prefer-singular-enums"),
  },

  configs: {
    // Core configs - When extending, one of these should go first
    core: require("./lib/config/core"),
    esnext: require("./lib/config/esnext"),
    typescript: require("./lib/config/typescript"),

    // Augmenting configs - When extending, these go after the core config
    jest: require("./lib/config/jest"),
    react: require("./lib/config/react"),
    "typescript-type-checking": require("./lib/config/typescript-type-checking"),

    // Prettier config - When extending, this must go last
    prettier: require("./lib/config/prettier"),
  },
};
