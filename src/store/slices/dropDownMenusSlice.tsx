import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { DropDownMenus } from '@/types';
import { RootState } from '@/store';

const initialState: DropDownMenus = {
  variableIsOpen: false,
  headersIsOpen: false,
};

const dropDownMenusSlice: Slice<DropDownMenus> = createSlice({
  name: 'dropDownMenusSlice',
  initialState,
  reducers: {
    setVariableIsOpen: (
      state: DropDownMenus,
      action: PayloadAction<boolean>
    ) => {
      state.variableIsOpen = action.payload;
    },
    setHeadersIsOpen: (
      state: DropDownMenus,
      action: PayloadAction<boolean>
    ) => {
      state.headersIsOpen = action.payload;
    },
  },
});

export const { setVariableIsOpen, setHeadersIsOpen } =
  dropDownMenusSlice.actions;
export const selectVariableIsOpen = (state: RootState) =>
  state.dropDownMenus.variableIsOpen;
export const selectHeadersIsOpen = (state: RootState) =>
  state.dropDownMenus.headersIsOpen;

export const dropDownMenusSliceReducer = dropDownMenusSlice.reducer;
