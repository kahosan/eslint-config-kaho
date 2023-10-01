import { antfu } from '@antfu/eslint-config';
import type { OptionsConfig } from '@antfu/eslint-config';

export const vue = (options?: OptionsConfig) => [
  ...antfu(options),
  {
    files: ['*.vue'],
    rules: {
      'no-console': ['warn']
    }
  }
];
