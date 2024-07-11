import { compatible } from './compatible';
import type { OptionsCompatible } from './compatible';

import { sukka } from 'eslint-config-sukka';
import type { ESLintSukkaOptions } from 'eslint-config-sukka';

import { react } from './react';
import { javascript } from './javascript';
import { typescript } from './typescript';

export { react } from './react';

export { ignores } from './ignores';

export { constants } from '@eslint-sukka/shared';

export type Options = ESLintSukkaOptions;

/**
 * 用自己的规则包了一层的 sukka rules
 */
export const kaho = (options: Options) => sukka(
  options,
  ...react,
  ...javascript,
  ...typescript(typeof options.ts !== 'boolean' ? options.ts?.componentExtentions : [])
);

/**
 * 仅开启 js ts json ignores rules
 */
export const room1304 = (options?: OptionsCompatible) => compatible(options);
