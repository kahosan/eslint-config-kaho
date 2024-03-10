import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { typescript } from './typescript';
import type { OptionsTypeScript } from '@eslint-sukka/ts';

import { javascript } from './javascript';
import type { OptionsJavaScript } from '@eslint-sukka/js';

import { react } from './react';
import type { OptionsReact } from '@eslint-sukka/react';

import { ignores } from './ignores';
import type { OptionsIgnores } from './ignores';

export { react } from './react';
export { typescript } from './typescript';
export { javascript } from './javascript';

export { ignores } from './ignores';

export { node } from '@eslint-sukka/node';
export { legacy } from '@eslint-sukka/legacy';

export { constants } from '@eslint-sukka/shared';

export interface DefaultOptions {
  ts: OptionsTypeScript
  js?: OptionsJavaScript
  /**
   * @default false
   */
  react?: OptionsReact | boolean
  ignores?: OptionsIgnores
}

export const kaho = (options: DefaultOptions) => {
  const eslintFlatConfigs: FlatESLintConfigItem[] = [];

  eslintFlatConfigs.push(...ignores(options.ignores), ...javascript(options.js), ...typescript(options.ts));

  if (typeof options.react === 'object')
    eslintFlatConfigs.push(...react(options.react));
  else if (options.react)
    eslintFlatConfigs.push(...react());

  return eslintFlatConfigs;
};
