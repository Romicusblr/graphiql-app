import { format } from 'prettier/standalone';
import graphql from 'prettier/plugins/graphql';
import babel from 'prettier/plugins/babel';
import estree from 'prettier/plugins/estree';

export const prettifyJson = (s: string) =>
  format(s, { parser: 'json-stringify', plugins: [babel, estree] });

export const prettifyGraphql = (s: string) =>
  format(s, { parser: 'graphql', plugins: [graphql] });
