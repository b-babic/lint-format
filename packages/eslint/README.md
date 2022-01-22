# `@progressivestudio/eslint-plugin`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40progressivestudio%2Feslint-plugin.svg)](https://badge.fury.io/js/%40progressivestudio%2Feslint-plugin.svg)

Shared ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

**With pnpm**

```bash
pnpm add --dev eslint
```

**With npm**

```bash
$ npm i eslint --save-dev
```

Next, install `@progressivestudio/eslint-plugin`:

**With pnpm**

```bash
pnpm add --dev @progressivestudio/eslint-plugin
```

**With npm**

```bash
$ npm install @progressivestudio/eslint-plugin --save-dev
```

## Usage

Shared ESLint configs come bundled in this package. In order to use them, you simply extend the relevant configuration in your project’s `.eslintrc`. For example, the following will extend the ESNext (ES2015 and later) config:

```json
{
  "extends": "plugin:@progressivestudio/esnext"
}
```

If you are working on an ES5 project, extend the ES5 version of the configuration:

```json
{
  "extends": "plugin:@progressivestudio/es5"
}
```

You can also add some "augmenting" configs on top of the "core" config by extending an array of linting configs. For example, the following configuration would provide a base ESNext config that is augmented by a React config:

```json
{
  "extends": ["plugin:@progressivestudio/esnext", "plugin:@progressivestudio/react"]
}
```

Likewise, if you are using TypeScript and React, the following configuration extends the TypeScript base config with the React-specific rules provided by the React configuration file. To demonstrate multiple augmentations, we've also added the Prettier config, which disables rules that will conflict in projects using prettier.

```json
{
  "extends": [
    "plugin:@progressivestudio/typescript",
    "plugin:@progressivestudio/react",
    "plugin:@progressivestudio/prettier"
  ]
}
```

## Provided configurations

This plugin provides the following core configurations:

- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.
- [typescript](lib/config/typescript.js): Use this for Typescript projects. The rules enabled in this config do not require type-checking to run. To enable all Typescript rules, you must augment this config with the `typescript-type-checking` config mentioned below.
- [es5](lib/config/es5.js): Use this for legacy projects.

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [typescript-type-checking](lib/config/typescript-type-checking.js) Use this config to augment the `typescript` config to enable all TypeScript rules, including those that require type checking. These rules are slower to run and and you will need to specify a path to your tsconfig.json file in the "project" property of "parserOptions". The following example would provide all of the TypeScript rules, assuming the tsconfig.json is in the same directory as you ESlint configuration.

```json
{
  "extends": [
    "plugin:@progressivestudio/typescript",
    "plugin:@progressivestudio/typescript-type-checking"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

- [react](lib/config/react.js): Use this for React projects.
- [prettier](lib/config/prettier.js): Use [prettier](https://github.com/prettier/prettier) for consistent formatting. Extending this Shopify's prettier config will [override](https://github.com/prettier/eslint-config-prettier/blob/master/index.js) the default Shopify eslint rules in favor of prettier formatting. Prettier must be installed within your project, as @progressivestudio/eslint-plugin does not provide the dependency itself.
- [webpack](lib/config/webpack.js): Use this for projects built by [webpack](https://webpack.js.org/).


### Supported Typescript version

The supported version of TypeScript is constrained by the [@typescipt-eslint parser support](https://github.com/typescript-eslint/typescript-eslint#supported-typescript-version) that is installed.

