import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, logIn, logOut, register, updateUser } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isLoggedIn = false;
};

const initialState = {
  token: {
    username: null,
    email: null,
    avatarURL: null,
    phone: null,
    skype: null,
    birthday: null,
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.token = {
          username: null,
          email: null,
          avatarURL: null,
          phone: null,
          skype: null,
          birthday: null,
          token: null,
        };
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = payload.isRefreshing;
        state.error = null;
      })
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;


//   extraReducers: {
//     [register.pending]: handlePending,
//     [register.fulfilled]: (state, { payload }) => {
//       state.user = payload;
//       state.token = payload;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [register.rejected]: handleRejected,
//
//     [logIn.pending]: handlePending,
//     [logIn.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.token = payload;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [logIn.rejected]: handleRejected,
//
//     [logOut.pending]: handlePending,
//     [logOut.fulfilled](state, action) {
//       state.user = { username: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [logOut.rejected]: handleRejected,
//
//     [refreshUser.pending]: handlePending,
//     [refreshUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.userPhoto = payload;
//       state.usrPhone = payload;
//       state.userSkype = payload;
//       state.userBirthday = payload;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [refreshUser.rejected]: handleRejected,
//   },
//
//     [updateUser.pending]: handlePending,
//     [updateUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.userPhoto = payload;
//       state.usrPhone = payload;
//       state.userSkype = payload;
//       state.userBirthday = payload;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.isRefreshing = payload.isRefreshing;
//       state.error = null;
//     },
//     [updateUser.rejected]: handleRejected,
// });
//
// export const authReducer = authSlice.reducer;



