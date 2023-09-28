import type { FlatESLintConfigItem } from 'eslint-define-config';

import { typescript } from './typescript';
import type { OptionsTypeScript } from '@eslint-sukka/ts';

import { javascript } from './javascript';
import type { OptionsJavaScript } from '@eslint-sukka/js';

import { react } from './react';
import type { OptionsReact } from '@eslint-sukka/react';

import { ignores } from './ignores';

export { typescript } from './typescript';
export { javascript } from './javascript';
export { react } from './react';
export { vue } from './vue';

export { ignores } from './ignores';

export { node } from '@eslint-sukka/node';
export { legacy } from '@eslint-sukka/legacy';

export { constants } from '@eslint-sukka/shared';

export interface DefaultOptions {
  ts: OptionsTypeScript,
  js?: OptionsJavaScript,
  react?: OptionsReact | boolean
}

export const kaho = (options: DefaultOptions) => {
  const eslintFlatConfigs: FlatESLintConfigItem[] = [];

  eslintFlatConfigs.push(...ignores(), ...javascript(options.js), ...typescript(options.ts));

  if (typeof options.react === 'object')
    eslintFlatConfigs.push(...react(options.react));
  else if (options.react !== false)
    eslintFlatConfigs.push(...react());

  return eslintFlatConfigs;
};
