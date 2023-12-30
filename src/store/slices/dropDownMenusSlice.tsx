import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { DropDownMenus } from '@/types';
import { RootState } from '@/store';

const initialState: DropDownMenus = {
  variableIsOpen: false,
  headersIsOpen: false,
  docsIsOpen: false,
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
    setDocsIsOpen: (
        state: DropDownMenus,
        action: PayloadAction<boolean>
    ) => {
      state.docsIsOpen = action.payload;
    },
  },
});

export const { setVariableIsOpen, setHeadersIsOpen, setDocsIsOpen } =
  dropDownMenusSlice.actions;
export const selectVariableIsOpen = (state: RootState) =>
  state.dropDownMenus.variableIsOpen;
export const selectHeadersIsOpen = (state: RootState) =>
  state.dropDownMenus.headersIsOpen;
export const selectDocsIsOpen = (state: RootState) =>
    state.dropDownMenus.docsIsOpen;

export const dropDownMenusSliceReducer = dropDownMenusSlice.reducer;
