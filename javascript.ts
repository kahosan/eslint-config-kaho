import type { FlatESLintConfigItem } from 'eslint-define-config';

import { javascript as sukka } from '@eslint-sukka/js';
import type { OptionsJavaScript } from '@eslint-sukka/js';

import { constants } from '@eslint-sukka/shared';

export const javascript = (options?: OptionsJavaScript): FlatESLintConfigItem[] => [
  ...sukka(options),
  {
    files: [
      constants.GLOB_JS,
      constants.GLOB_JSX
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
