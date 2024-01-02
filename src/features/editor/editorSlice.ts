import { createSlice } from '@reduxjs/toolkit';
import { QueryEditor as App } from '@/types';
import { RootState } from '@/app/store';

const initialState: App = {
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  query: '',
  output: '',
  variable: '',
  headers: {},
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
    setVariable(state, action) {
      state.variable = action.payload;
    },
    setHeaders(state, action) {
      state.headers = action.payload;
    },
  },
});

export const { setApiUrl, setQuery, setVariable, setHeaders, setOutput } =
  appSlice.actions;
export const selectQuery = (state: RootState) => state.editor.query;
export const selectApiUrl = (state: RootState) => state.editor.apiUrl;
export const selectOutput = (state: RootState) => state.editor.output;
export const selectVariable = (state: RootState) => state.editor.variable;
export const selectHeaders = (state: RootState) => state.editor.headers;

export default appSlice.reducer;
