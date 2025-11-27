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
      /** @see {@link https://perfectionist.dev/rules/sort-imports#groups} */
      groups: [
        'type-builtin',
        'type-import',
        'type-internal',
        ['type-parent', 'type-sibling', 'type-index'],
        'default-value-builtin',
        'named-value-builtin',
        'value-builtin',
        'default-value-external',
        'named-value-external',
        'value-external',
        'default-value-internal',
        'named-value-internal',
        'value-internal',
        ['default-value-parent', 'default-value-sibling', 'default-value-index'],
        ['named-value-parent', 'named-value-sibling', 'named-value-index'],
        ['wildcard-value-parent', 'wildcard-value-sibling', 'wildcard-value-index'],
        ['value-parent', 'value-sibling', 'value-index'],
        'side-effect',
        'style',
        'unknown'
      ],
      newlinesBetween: 'always',
      partitionByComment: true,
      type: 'line-length',
      order: 'asc',
      fallbackSort: { type: 'alphabetical', order: 'asc' }
    }],
    'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }]
  }
};
