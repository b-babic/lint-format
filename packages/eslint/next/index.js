require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@progressivestudio/eslint-config-react"],
  rules: {
    "jsx-a11y/anchor-is-vaild": 0, // disable a11y rule for next-link
  },
};
