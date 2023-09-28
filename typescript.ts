import type { FlatESLintConfigItem } from 'eslint-define-config';

import { typescript as sukka } from '@eslint-sukka/ts';
import type { OptionsTypeScript } from '@eslint-sukka/ts';

import { constants } from '@eslint-sukka/shared';

export const typescript = (options: OptionsTypeScript): FlatESLintConfigItem[] => [
  ...sukka(options),
  {
    files: [
      constants.GLOB_TS,
      constants.GLOB_TSX
    ],
    rules: {
      '@typescript-eslint/ban-types': ['error', {
        types: {
          '{}': false
        },
        extendDefaults: true
      }],
      curly: [
        'error',
        'multi-or-nest',
        'consistent'
      ],
      'no-console': 'warn'
    }
  }
];
