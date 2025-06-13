import { constants } from '@eslint-sukka/shared';
import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

export const javascript: FlatESLintConfigItem[] = [
  {
    files: [
      constants.GLOB_JS,
      constants.GLOB_JSX
    ],
    rules: {
      curly: [
        'error',
        'multi-or-nest',
        'consistent'
      ],
      // https://eslint.style/rules/nonblock-statement-body-position
      '@stylistic/nonblock-statement-body-position': 'off',
      // https://eslint.style/rules/arrow-parens
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      'no-console': 'warn',
      'arrow-body-style': 'off',
      'sukka/no-chain-array-higher-order-functions': 'off'
    }
  }
];
