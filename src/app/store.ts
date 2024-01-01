import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import editorReducer from '@/features/editor/editorSlice';
import { api } from './services/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
