import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://calendar-server-g3h0.onrender.com/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return error.response.status;
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/update', userData);
      return data.data;
    } catch (error) {
      toast.error('Failed to update user');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  'users/authGoogle',
  async (token, thunkAPI) => {
    try {
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// https://www.youtube.com/watch?v=NMB2vjDLTLk
// export const resetPassword = createAsyncThunk(
//   'auth/recoverPassword',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users/reset_password', credentials);
//       return data.data;
//     } catch (error) {
//       toast.error('Failed to reset password');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
