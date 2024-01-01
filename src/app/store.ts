import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/authSlice';
import appReducer from '../store/slices/appSlice';
import { dropDownMenusSliceReducer } from '@/store/slices/dropDownMenusSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    dropDownMenus: dropDownMenusSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
