import { antfu } from '@antfu/eslint-config';

export const vue = (options?: Parameters<typeof antfu>[0]) => antfu(
  options,
  {
    rules: {
      'no-console': ['warn'],
      'ts/ban-types': ['error', {
        types: {
          '{}': false
        },
        extendDefaults: true
      }]
    }
  }
);
