import type { FlatESLintConfigItem } from 'eslint-define-config';
import { antfu } from '@antfu/eslint-config';

export const vue = (ts = true): FlatESLintConfigItem[] => {
  return [
    ...antfu({ typescript: ts }),
    {
      files: ['*.vue'],
      rules: {
        'no-console': ['warn']
      }
    }
  ];
};
