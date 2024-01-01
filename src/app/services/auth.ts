import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '@/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { RegisterUserDTO, LoginUserDTO, UserAuth } from '@/types';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<UserAuth, LoginUserDTO>({
      queryFn: async (dto) => {
        try {
          const { user } = await signInWithEmailAndPassword(
            auth,
            dto.email,
            dto.password
          );
          const token = await user.getIdToken();
          const data = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            token,
          };
          return { data };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    register: build.mutation<null, RegisterUserDTO>({
      queryFn: async (dto) => {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            dto.email,
            dto.password
          );
          await updateProfile(user, {
            displayName: dto.name,
          });
          return { data: null };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    logout: build.mutation<null, void>({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { data: null };
        } catch (e) {
          return { error: e };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = api;
