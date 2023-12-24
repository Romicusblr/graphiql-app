import { createSlice } from '@reduxjs/toolkit';
import { DropDownMenus } from '@/types';
import { RootState } from '@/store';

const initialState: DropDownMenus = {
  menuToggle: false,
};

export const dropDownMenusSlice = createSlice({
  name: 'dropDownMenusSlice',
  initialState,
  reducers: {
    setMenuToggle(state) {
      state.menuToggle = !state.menuToggle;
    },
  },
});

export const { setMenuToggle } = dropDownMenusSlice.actions;
export const selectMenuToggle = (state: RootState) => state.menuToggle;

export default dropDownMenusSlice.reducer;
