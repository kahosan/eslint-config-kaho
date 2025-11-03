import type { sukka } from 'eslint-config-sukka';

type SukkaOptions = Parameters<typeof sukka>[0];

export type Options = SukkaOptions & {
  sorting?: boolean
};

export function componentExtensions(options?: Options) {
  return typeof options?.ts === 'boolean'
    ? []
    : options?.ts?.componentExtensions;
}
