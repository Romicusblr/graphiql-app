import { createSlice } from '@reduxjs/toolkit';
import { QueryEditor as App } from '@/types';
import { RootState } from '@/store';

const initialState: App = {
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  query: '',
  variable: '',
  headers: '',
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
    setVariable(state, action) {
      state.variable = action.payload;
    },
    setHeaders(state, action) {
      state.headers = action.payload;
    },
  },
});

export const { setApiUrl, setQuery, setVariable, setHeaders } = appSlice.actions;
export const selectQuery = (state: RootState) => state.app.query;
export const selectApiUrl = (state: RootState) => state.app.apiUrl;
export const selectVariable = (state: RootState) => state.app.variable;
export const selectHeaders = (state: RootState) => state.app.headers;

export default appSlice.reducer;
