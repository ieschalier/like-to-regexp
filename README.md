# like-to-regexp [![CircleCI](https://circleci.com/gh/ieschalier/like-to-regexp/tree/master.svg?style=svg)](https://circleci.com/gh/ieschalier/like-to-regexp/tree/master)

Transform sql like query to a valide regexp.

| SQL LIKE |  ReGexp         |
|----------|-----------------|
|  value   |  /^value$/i     |
|  %value% | /^.*value.*$/i  |
|  value%  | /^value.*$/i    |
|  %value  | /^.*value$/i    |
|  v_lue   | /^v.lue$/i      |

## Install

```bash
yarn add like-to-regexp
```

## Usage

```javascript
import toReGexp from 'like-to-regexp'

const regexp = toReGexp('%value%')

if (regexp.test('value')) console.log('Hello world')
```
