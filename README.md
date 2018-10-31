# like-to-regexp

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
