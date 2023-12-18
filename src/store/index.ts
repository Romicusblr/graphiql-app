import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import queryReducer from './slices/querySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
