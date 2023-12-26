import { createSlice } from '@reduxjs/toolkit';
import { QueryEditor as App } from '@/types';
import { RootState } from '@/store';

const initialState: App = {
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  query: '',
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
    }
  },
});

export const { setApiUrl, setQuery } = appSlice.actions;
export const selectQuery = (state: RootState) => state.app.query;
export const selectApiUrl = (state: RootState) => state.app.apiUrl;

export default appSlice.reducer;
