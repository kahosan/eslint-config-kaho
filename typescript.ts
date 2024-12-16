import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { constants } from '@eslint-sukka/shared';

export const typescript = (componentExtentions?: string[]): FlatESLintConfigItem[] => [
  {
    files: [
      constants.GLOB_TS,
      constants.GLOB_TSX,
      ...(componentExtentions?.map(ext => `**/*.${ext}`) ?? [])
    ],
    rules: {
      curly: [
        'error',
        'multi-or-nest',
        'consistent'
      ],
      'no-undef': 'off',
      'no-console': 'warn',
      'antfu/top-level-function': 'off',
      'arrow-body-style': 'off',
      // https://eslint.style/rules/js/nonblock-statement-body-position
      '@stylistic/js/nonblock-statement-body-position': 'off',
      // https://eslint.style/rules/js/arrow-parens
      '@stylistic/js/arrow-parens': ['error', 'as-needed'],
      // https://eslint.style/rules/ts/member-delimiter-style
      '@stylistic/ts/member-delimiter-style': ['error', {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma', requireLast: false }
      }],
      // https://typescript-eslint.io/rules/restrict-template-expressions
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allowAny: true,
        allowNumber: true,
        allowBoolean: true,
        allowNullish: false
      }]
    }
  }
];
