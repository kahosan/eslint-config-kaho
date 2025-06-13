import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { constants } from '@eslint-sukka/shared';

export const react: FlatESLintConfigItem[] = [
  {
    files: [
      constants.GLOB_TS,
      constants.GLOB_TSX,
      constants.GLOB_JS,
      constants.GLOB_JSX
    ],
    rules: {
      // https://eslint.style/rules/multiline-ternary
      '@stylistic/multiline-ternary': ['error', 'always-multiline', { ignoreJSX: true }] }
  }
];
