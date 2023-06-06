import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, logIn, logOut, register, updateUser } from './operations';

const handlePending = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
};
const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.error = payload;
};

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
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.fulfilled, (state, { payload: { token, ...others } }) => {
        state.user = { ...others };
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
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

        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload: { token, ...others } }) => {
          state.user = { ...others };
          state.token = token;
          state.isRefreshing = false;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addCase(refreshUser.rejected, handleRejected)

      .addCase(
        updateUser.fulfilled,
        (state, { payload: { token, ...others } }) => {
          state.user = { ...others };
          state.token = token;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
