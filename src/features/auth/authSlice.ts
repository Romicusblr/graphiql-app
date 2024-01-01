import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import type { UserAuth } from '@/types';

const initialState = null as UserAuth;

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(_, action: PayloadAction<UserAuth>) {
      return action.payload;
    },
    removeUser() {
      return null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
