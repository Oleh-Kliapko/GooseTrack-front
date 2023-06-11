import { createSlice } from '@reduxjs/toolkit';
import {
  refreshUser,
  logIn,
  logOut,
  register,
  updateUser,
  fetchUserById,
  authGoogle,
} from './operations';

const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
    phone: null,
    skype: null,
    birthday: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        register.fulfilled,
        (state, { payload: { token, ...others } }) => {
          state.user = { ...others };
          state.error = null;
        }
      )

      .addCase(logIn.fulfilled, (state, { payload: { token, ...others } }) => {
        state.user = { ...others };
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          username: null,
          email: null,
          avatarURL: null,
          phone: null,
          skype: null,
          birthday: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = true;
      })

      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload: { token, ...others } }) => {
          state.user = { ...others };
          state.token = token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateUser.fulfilled, (state, { payload }) => {

        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(authGoogle.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
