'use strict';

const { kaho, node } = require('./dist/index');

module.exports = [
  ...kaho({ react: false, ts: { tsconfigPath: './tsconfig.json' } }),
  ...node()
];
