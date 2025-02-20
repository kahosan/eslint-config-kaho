import { compatible, componentExtentions } from './compatible';
import type { Options } from './compatible';

import { sukka } from 'eslint-config-sukka';
import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { react } from './react';
import { javascript } from './javascript';
import { typescript } from './typescript';

export { react } from './react';

export { constants } from '@eslint-sukka/shared';

export function kaho(options?: Options, ...userConfig: FlatESLintConfigItem[]) {
  const defaultOptions: Options = {
    yaml: false,
    ...options
  };

  return sukka(
    defaultOptions,
    ...javascript,
    ...typescript(componentExtentions(options)),
    ...react,
    ...userConfig
  );
}

export const room1304 = (options?: Options, ...userConfig: FlatESLintConfigItem[]) => compatible(options, ...userConfig);
