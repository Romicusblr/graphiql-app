import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { selectApiUrl } from '@/features/editor/editorSlice';
import type { RootState } from '../store';
import {getIntrospectionQuery} from 'graphql/index';

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseUrl = selectApiUrl(api.getState() as RootState);
  // gracefully handle scenarios where data to generate the URL is missing
  if (!baseUrl) {
    return {
      error: {
        status: 400,
        statusText: 'Bad Request',
        data: 'No url provided',
      },
    };
  }
  return fetchBaseQuery({ baseUrl })(args, api, extraOptions);
};

export type GqlRequest = {
  query: string;
  headers: Record<string, string | undefined>;
  variables: Record<string, string | undefined>;
};

export const api = createApi({
  reducerPath: 'gql-api',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    gql: builder.query<object, GqlRequest>({
      query: ({ query, headers, variables }) => ({
        url: '',
        headers,
        method: 'POST',
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(patch)`
        body: { query, variables },
      }),
    }),
    getSchema: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: getIntrospectionQuery()
        },
      }),
    }),
  }),
});

export const { useLazyGqlQuery, useGetSchemaQuery } = api;
