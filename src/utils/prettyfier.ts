import { format } from 'prettier/standalone';
import graphql from 'prettier/plugins/graphql';

export const prettifyJson = (obj: object) => JSON.stringify(obj, null, 2);

export const prettifyGraphql = (s: string) =>
  format(s, { parser: 'graphql', plugins: [graphql] });
