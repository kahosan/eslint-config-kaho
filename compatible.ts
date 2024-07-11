import { sukka } from 'eslint-config-sukka';
import type { ESLintSukkaOptions } from 'eslint-config-sukka';

import { javascript } from './javascript';
import { typescript } from './typescript';

export type OptionsCompatible = ESLintSukkaOptions;

export const compatible = async (options?: OptionsCompatible) => {
  const exts = typeof options?.ts !== 'boolean' ? options?.ts?.componentExtentions : [];

  const ops: OptionsCompatible = {
    next: false,
    react: false,
    stylex: false,
    legacy: false,
    node: false,
    ...options
  };

  return sukka(ops, ...javascript, ...typescript(exts));
};
