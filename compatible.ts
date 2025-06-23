import { sukka } from 'eslint-config-sukka';
import type { FlatESLintConfigItem } from '@eslint-sukka/shared';

import { javascript } from './javascript';
import { typescript } from './typescript';
import { react } from './react';

export type Options = typeof sukka extends (options: infer T, ...args: any[]) => any ? T extends undefined ? never : T : never;

export function componentExtensions(options?: Options) {
  return typeof options?.ts === 'boolean'
    ? []
    : options?.ts?.componentExtensions;
}

export async function compatible(options?: Options, ...userConfig: FlatESLintConfigItem[]) {
  const ops: Options = {
    next: false,
    react: false,
    stylex: false,
    legacy: false,
    node: false,
    yaml: false,
    ...options
  };

  return sukka(ops, ...javascript, ...typescript(componentExtensions(ops)), ...react, ...userConfig);
}
