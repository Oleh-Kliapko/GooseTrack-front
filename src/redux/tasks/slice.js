import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, updateTask } from './operations';


const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = payload;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(payload);
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
        state.error = null;
        state.tasks = state.tasks.filter((task) => task.id !== payload.id);
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
        state.tasks = state.tasks.map((task) =>
          task.id === payload.id ? payload : task
        );
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;




//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       state.tasks = payload;
//     },
//     [fetchTasks.rejected]: handleRejected,
//
//     [addTask.pending]: handlePending,
//     [addTask.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       state.tasks.push(payload);
//     },
//     [addTask.rejected]: handleRejected,
//
//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       const tasksId = state.tasks.findIndex(
//         item => item.id === payload.id,
//       );
//       state.tasks.splice(tasksId, 1);
//     },
//     [deleteTask.rejected]: handleRejected,
//
//     [updateTask.pending]: handlePending,
//     [updateTask.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       const tasksId = state.tasks.findIndex(
//         item => item.id === payload.id,
//       );
//       state.tasks.splice(tasksId, 1);
//     },
//     [updateTask.rejected]: handleRejected,
//
//     [logOut.fulfilled]:(state) =>{
//       state.tasks = [];
//       state.error = null;
//       state.isLoading = false;
//     },
//   },
// });
//
// export const tasksReducer = tasksSlice.reducer;
//
