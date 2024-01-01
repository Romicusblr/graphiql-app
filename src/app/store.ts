import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import editorReducer from '@/features/editor/editorSlice';
import { api as auth } from './services/auth';
import { api as graphql } from './services/graphql';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
    [auth.reducerPath]: auth.reducer,
    [graphql.reducerPath]: graphql.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth.middleware).concat(graphql.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
