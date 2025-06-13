import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { constants } from '@eslint-sukka/shared';

export function typescript(componentExtentions?: string[]): FlatESLintConfigItem[] {
  return [
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
        'arrow-body-style': 'off',
        // https://eslint.style/rules/nonblock-statement-body-position
        '@stylistic/nonblock-statement-body-position': 'off',
        // https://eslint.style/rules/arrow-parens
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        // https://eslint.style/rules/member-delimiter-style
        '@stylistic/member-delimiter-style': ['error', {
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
}
