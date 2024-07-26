import { sukka } from 'eslint-config-sukka';

import { javascript } from './javascript';
import { typescript } from './typescript';

export type Options = typeof sukka extends (options: infer T, ...args: any[]) => any ? T extends undefined ? never : T : never;

export const componentExtentions = (options?: Options) => {
  return typeof options?.ts !== 'boolean' ? options?.ts?.componentExtentions : [];
};

export const compatible = async (options?: Options) => {
  const ops: Options = {
    next: false,
    react: false,
    stylex: false,
    legacy: false,
    node: false,
    ...options
  };

  return sukka(ops, ...javascript, ...typescript(componentExtentions(ops)));
};
