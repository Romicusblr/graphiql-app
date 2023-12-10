import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { UserAuth } from '@/types';

const initialState: UserAuth = {
  id: '123',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = '';
      state.email = '';
      state.token = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
