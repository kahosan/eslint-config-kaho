import type { sukka } from 'eslint-config-sukka';

type SukkaOptions = typeof sukka extends (options: infer T, ...args: any[]) => any ? T extends undefined ? never : T : never;

export type Options = SukkaOptions & {
  sorting?: boolean
};

export function componentExtensions(options?: Options) {
  return typeof options?.ts === 'boolean'
    ? []
    : options?.ts?.componentExtensions;
}
