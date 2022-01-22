require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["@progressivestudio/eslint-config-ts", "preact"],
  settings: {
    jest: { version: "detect" },
  },
};
