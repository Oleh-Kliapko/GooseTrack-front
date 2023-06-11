import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, updateTask, fetchMonthTasks } from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  choosedDate: new Date().toISOString().slice(0, 10),
  calendarType: 'month',
  isTaskModalOpen: false,
  isCurrentTaskEditing: false,
  monthTasks: [],
  currentTask: {
    _id: "",
    title: "",
    start: "00:00",
    end: "00:00",
    priority: "low",
    date: new Date().toISOString(),
    category: "to-do"
  },
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setChoosedDate(state, {payload}) {
      state.choosedDate = payload;
    },
    setCalendarType(state, {payload}) {
      state.calendarType = payload;
    },
    setIsTaskModalOpen(state, {payload}) {
      state.isTaskModalOpen = payload;
    },
    setIsCurrentTaskEditing(state, {payload}) {
      state.isCurrentTaskEditing = payload;
    },
    setMonthTasks(state, {payload}) {
      state.monthTasks = payload;
    },
    setCurrentTask(state, {payload}) {
      state.currentTask = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonthTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.monthTasks = [];
      })
      .addCase(fetchMonthTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.monthTasks = payload;
      })
      .addCase(fetchMonthTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.monthTasks.push({...payload, _id: payload.id});
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.monthTasks = state.monthTasks.filter((task) => task._id !== payload);
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const updatedTaskIndex = state.monthTasks.findIndex((task) => task._id === payload._id);
        if (updatedTaskIndex !== -1) {
          state.monthTasks[updatedTaskIndex] = payload;
        }
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.allTasks = [];
        state.tasksCurrentMonth = [];
        state.rating = 0;
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { 
  setChoosedDate, 
  setCalendarType, 
  setIsTaskModalOpen, 
  setIsCurrentTaskEditing, 
  setMonthTasks,
  setCurrentTask
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
