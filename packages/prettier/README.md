# `@progressivestudio/prettier-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40progressivestudio%2Fprettier-config.svg)](https://badge.fury.io/js/%40progressivestudio%2Fprettier-config.svg)

Shared prettier configuration

## Installation

```bash
$ pnpm add --dev @progressivestudio/prettier-config
```

## Usage

Shared prettier config comes bundled in `@progressivestudio/prettier-config`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:

```
"prettier": "@progressivestudio/prettier-config"
```

Previously, rules had been defined directly in a `.prettierrc` or `package.json`

Any previous `.prettierrc` should be removed in favour of the shared config.
