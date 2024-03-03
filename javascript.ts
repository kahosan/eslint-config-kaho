import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

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
      curly: [
        'error',
        'multi-or-nest',
        'consistent'
      ],
      // https://eslint.style/rules/js/nonblock-statement-body-position
      '@stylistic/js/nonblock-statement-body-position': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'no-console': 'warn'
    }
  }
];
