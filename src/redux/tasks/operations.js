import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setChoosedDate = createAsyncThunk(
  'tasks/setChoosedDate',
  async (date, thunkAPI) => {
    try {
      
      return date;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const setCurrentTask = createAsyncThunk(
  'tasks/setCurrentTask',
  async (task, thunkAPI) => {
    try {
      
      return task;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', task);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask, thunkAPI) => {
    try {
      const { id, ...data } = updatedTask;
      const res = await axios.patch(`/tasks/${id}`, data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
