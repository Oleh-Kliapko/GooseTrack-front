import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://calendar-server-g3h0.onrender.com/api';

// Для токена, щоб завантажувати JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// щоб очистити токен
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/register
 * body: { username, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  // credentials - відправляються дані з форми
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      // додаємо токен до запиту
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      if (error.message === `Email has already registered. Please log in`) {
        toast.error(`User with this email  already exist`);
      } else {
        toast.error(
          `Enter valid email: contain letter,at lest one '.' and @. Or valid password: min 6 numbers, at lest one letter. Or valid name:`,
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      // додаємо токен до запиту
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      toast.error(`Email or Password is wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

//  Get information about the current user
//   "data": {
//   "id": "647a2aed72efb73b9334d3d2",
//     "avatarURL": "http://my-avatar.com/23456",
//     "email": "string",
//     "username": "string",
//     "birthday": "1977-06-10T00:00:00.000Z",
//     "phone": "38 (067) 111 17 11",
//     "skype": "(067) 111 17 11",
//     "token": "..."
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // getState() повертає весь стан
    console.log(state);
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      // rejectWithValue() помилку повертаємо
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
//   "avatarURL": "<urlPattern>",
//   "email": "string",
//   "username": "string",
//   "password": "Ro1478",
//   "birthday": "2023-06-03",
//   "phone": "38 (067) 409 90 67",
//   "skype": "string"
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
  },
);


