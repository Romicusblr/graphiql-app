import {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} from 'graphql/index';
import { Dispatch } from '@reduxjs/toolkit';
import { setSchema } from '@/features/editor/editorSlice';

export const getSchema = async (
  apiUrl: string,
  headers: Record<string, string>,
  dispatch: Dispatch
) => {
  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const result = await res.json();
    const data = result.data;

    const schema = buildClientSchema(data);
    const printedSchema = printSchema(schema);

    dispatch(setSchema(printedSchema));
  } catch (e) {
    console.error(`error : ${e}`);
  }
};
