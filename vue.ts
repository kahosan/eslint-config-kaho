import { antfu } from '@antfu/eslint-config';

export const vue = (options?: Parameters<typeof antfu>[0]) => [
  ...antfu(options),
  {
    files: ['*.vue'],
    rules: {
      'no-console': ['warn']
    }
  }
];
