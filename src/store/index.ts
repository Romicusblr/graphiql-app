import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import queryReducer from './slices/querySlice';
import dropDownMenusReducer from './slices/dropDownMenusSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
    dropDownMenus: dropDownMenusReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
