import { compatible, componentExtentions } from './compatible';
import type { Options } from './compatible';

import { sukka } from 'eslint-config-sukka';

import { react } from './react';
import { javascript } from './javascript';
import { typescript } from './typescript';

export { react } from './react';

export { constants } from '@eslint-sukka/shared';

export function kaho(options?: Options) {
  return sukka(
    options,
    ...javascript,
    ...typescript(componentExtentions(options)),
    ...react
  );
}

export const room1304 = (options?: Options) => compatible(options);
