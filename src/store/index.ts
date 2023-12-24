import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import queryReducer from './slices/querySlice';
import { dropDownMenusSliceReducer } from '@/store/slices/dropDownMenusSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
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
