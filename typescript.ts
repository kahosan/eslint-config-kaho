import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { typescript as sukka } from '@eslint-sukka/ts';
import type { OptionsTypeScript } from '@eslint-sukka/ts';

import { constants } from '@eslint-sukka/shared';

export const typescript = (options: OptionsTypeScript): FlatESLintConfigItem[] => [
  ...sukka(options),
  {
    files: [
      constants.GLOB_TS,
      constants.GLOB_TSX,
      ...(options.componentExtentions?.map(ext => `**/*.${ext}`) ?? [])
    ],
    rules: {
      curly: [
        'error',
        'multi-or-nest',
        'consistent'
      ],
      // https://eslint.style/rules/js/nonblock-statement-body-position
      '@stylistic/js/nonblock-statement-body-position': 'off',
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
      }],
      'no-undef': 'off',
      'no-console': 'warn'
    }
  }
];
