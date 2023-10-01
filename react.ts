import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { react as sukka } from '@eslint-sukka/react';
import type { OptionsReact } from '@eslint-sukka/react';

import { constants } from '@eslint-sukka/shared';

export const react = (options?: OptionsReact): FlatESLintConfigItem[] => [
  ...sukka(options),
  {
    files: [
      constants.GLOB_TS,
      constants.GLOB_TSX,
      constants.GLOB_JS,
      constants.GLOB_JSX
    ],
    rules: {}
  }
];
