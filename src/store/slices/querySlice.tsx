import { createSlice } from '@reduxjs/toolkit';
import { QueryEditor } from '@/types';
import { RootState } from '@/store';

const initialState: QueryEditor = {
  query: '',
  numberOfLines: 0,
};

export const querySlice = createSlice({
  name: 'querySlice',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload.query;
    },
    setNumberOfLines(state, action) {
      state.numberOfLines = action.payload.numberOfLines;
    },
  },
});

export const { setQuery, setNumberOfLines } = querySlice.actions;
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
