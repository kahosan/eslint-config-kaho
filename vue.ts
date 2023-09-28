import type { FlatESLintConfigItem } from 'eslint-define-config';

import { antfu } from '@antfu/eslint-config';
import type { OptionsConfig } from '@antfu/eslint-config';

export const vue = (options?: OptionsConfig): FlatESLintConfigItem[] => {
  return [
    ...antfu(options),
    {
      files: ['*.vue'],
      rules: {
        'no-console': ['warn']
      }
    }
  ];
};

export type { OptionsConfig } from '@antfu/eslint-config';
