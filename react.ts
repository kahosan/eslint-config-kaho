import type { FlatESLintConfigItem } from 'eslint-define-config';

import { react as sukka } from '@eslint-sukka/react';
import type { OptionsReact } from '@eslint-sukka/react';

import { constants } from '@eslint-sukka/shared';

export const react = (options?: OptionsReact): FlatESLintConfigItem[] => [
  ...sukka(options),
  {
    files: [
      constants.GLOB_JSX,
      constants.GLOB_TSX
    ],
    rules: {}
  }
];
