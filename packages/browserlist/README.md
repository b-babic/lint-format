# `@progressivestudio/browserslist-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40progressivestudio%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40progressivestudio%2Fbrowserslist-config.svg)

Shareable [browserslist](https://github.com/ai/browserslist) configuration.

## Supported Browsers

| Browser                     | Version |
| --------------------------- | ------- |
| Chrome & Chrome for Android | last 3  |
| Firefox                     | last 3  |
| Opera                       | last 3  |
| Edge                        | last 3  |
| Safari                      | last 3  |
| iOS                         | >= 13.4 |

You can list all supported browsers by running `pnpm dlx browserslist "last 1 firefoxandroid versions, last 3 chrome versions, last 3 chromeandroid versions, last 3 firefox versions, last 3 opera versions, last 3 edge versions, last 3 safari versions, ios >= 13.4"`

## Installation

Install the module.

```shell
$ yarn add @progressivestudio/browserslist-config
```

## Usage

### package.json

```json
{
  "browserslist": ["extends @progressivestudio/browserslist-config"]
}
```
