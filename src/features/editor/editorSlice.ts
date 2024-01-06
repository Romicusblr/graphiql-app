import { createSlice } from '@reduxjs/toolkit';
import { QueryEditor as App } from '@/types';
import { RootState } from '@/app/store';
import { api } from '@/app/services/graphql';
import { prettifyJson } from '@/utils/prettyfier';

const initialState: App = {
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  query: '',
  output: '',
  variables: {},
  headers: {},
  schema: '',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setApiUrl(state, action) {
      state.apiUrl = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setOutput(state, action) {
      state.output = action.payload;
    },
    setVariables(state, action) {
      state.variables = action.payload;
    },
    setHeaders(state, action) {
      state.headers = action.payload;
    },
    setSchema(state, action) {
      state.schema = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.gql.matchFulfilled, (state, { payload }) => {
        state.output = prettifyJson(payload);
      })
      .addMatcher(api.endpoints.gql.matchRejected, (state, { payload }) => {
        if (payload?.data) {
          state.output = prettifyJson(payload?.data);
        }
      });
  },
});

export const {
  setApiUrl,
  setQuery,
  setVariables,
  setHeaders,
  setOutput,
  setSchema,
} = appSlice.actions;

export const selectQuery = (state: RootState) => state.editor.query;
export const selectApiUrl = (state: RootState) => state.editor.apiUrl;
export const selectOutput = (state: RootState) => state.editor.output;
export const selectVariables = (state: RootState) => state.editor.variables;
export const selectHeaders = (state: RootState) => state.editor.headers;
export const selectSchema = (state: RootState) => state.editor.schema;

export default appSlice.reducer;
