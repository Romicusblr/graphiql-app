import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { DropDownMenus } from '@/types';

const initialState: DropDownMenus = {
  isOpen: false,
};

const dropDownMenusSlice: Slice<DropDownMenus> = createSlice({
  name: 'dropDownMenusSlice',
  initialState,
  reducers: {
    setIsOpen: (state: DropDownMenus, actions: PayloadAction<boolean>) => {
      state.isOpen = actions.payload;
    },
  },
});

export const { setIsOpen } = dropDownMenusSlice.actions;
export const dropDownMenusSliceReducer = dropDownMenusSlice.reducer;
