import { componentExtensions } from './compatible';
import type { Options } from './compatible';

import { sukka } from 'eslint-config-sukka';
import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { react } from './react';
import { sorting } from './plugins';
import { javascript } from './javascript';
import { typescript } from './typescript';

export { react };
export * from './plugins';

export { constants } from '@eslint-sukka/shared';

export function kaho(options?: Options, ...userConfig: FlatESLintConfigItem[]) {
  const configs = [
    ...javascript,
    ...typescript(componentExtensions(options)),
    ...react
  ];

  if (options?.sorting)
    configs.push(sorting);

  return sukka(
    options,
    ...configs,
    ...userConfig
  );
}

export function room1304(options?: Options, ...userConfig: FlatESLintConfigItem[]) {
  return kaho(
    {
      next: false,
      react: false,
      stylex: false,
      legacy: false,
      node: false,
      yaml: false,
      sorting: false,
      ...options
    },
    ...userConfig
  );
}
