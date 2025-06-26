import perfectionist from 'eslint-plugin-perfectionist';

import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

/**
 * @link https://github.com/antfu/eslint-config/blob/main/src/configs/perfectionist.ts
 */
export const sorting: FlatESLintConfigItem = {
  name: 'antfu/perfectionist/setup',
  plugins: {
    perfectionist
  },
  rules: {
    'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-imports': ['error', {
      groups: [
        'type',
        ['parent-type', 'sibling-type', 'index-type', 'internal-type'],

        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
        'side-effect',
        'object',
        'unknown'
      ],
      newlinesBetween: 'ignore',
      order: 'asc',
      type: 'natural'
    }],
    'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }]
  }
};
