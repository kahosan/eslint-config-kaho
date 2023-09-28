# eslint-config-kaho

## Installation

```bash
pnpm add -D eslint eslint-config-kaho
```

## Usage

### JavaScript, TypeScript, React

```js
const { kaho } = require('eslint-config-kaho')

module.exports = kaho({ ts: { tsconfigPath: '<your path>' } })
```

### Vue

```js
const { vue } = require('eslint-config-kaho')

module.exports = vue()
```

## Thanks

[@antfu/eslint-config](https://github.com/antfu/eslint-config)
[eslint-config-sukka](https://github.com/SukkaW/eslint-config-sukka)

## License

MIT
