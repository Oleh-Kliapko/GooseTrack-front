import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, updateTask, setChoosedDate, setCurrentTask, addNewTask, saveEditedTask } from './operations';
import { logOut } from '../auth/operations';


const initialState = {
  choosedDate: new Date().toISOString().slice(0, 10),
  isCurrentDateBusy: false,
  currentTask: {
    _id: "",
    title: "",
    start: "00:00",
    end: "00:00",
    priority: "low",
    date: new Date().toISOString(),
    category: "to-do"
  },
  isCurrentTaskEditing: false,
  tasksForChoosedPeriod: [],
  isLoading: false,



  tasksCurrentMonth: [],
  allTasks: [],
  error: null,
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  /* reducers: {
    setCurrentTask(state, {payload}) {
      state.currentTask = payload;
    }
  }, */
  extraReducers: (builder) => {
    builder
      .addCase(setChoosedDate.pending, (state, {payload}) => {
        state.choosedDate = payload;
      })
      .addCase(setCurrentTask.fulfilled, (state, {payload}) => {
        state.currentTask = payload;
      })
      .addCase(addNewTask.fulfilled, (state, {payload}) => {
        
      })
      .addCase(saveEditedTask.fulfilled, (state, {payload}) => {
        
      })







      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasksCurrentMonth = payload.tasksCurrentMonth;
        state.allTasks = payload.allTasks;
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
        const date = payload.date.split('T')[0];
        const tasksCurrentMonthIndex = state.tasksCurrentMonth.findIndex(t => t.date === date);
        const allTasksIndex = state.allTasks.findIndex(t => t.date === date);

        if (tasksCurrentMonthIndex !== -1) {
          state.tasksCurrentMonth[tasksCurrentMonthIndex].push(payload);
        } else {
          state.tasksCurrentMonth.push({
            _id: payload._id,
            title: payload.title,
            start: payload.start,
            end: payload.end,
            priority: payload.priority,
            date: payload.date,
            category: payload.category,
            owner: payload.owner,
            createdAt: payload.createdAt,
          });
        }

        if (allTasksIndex !== -1) {
          state.allTasks[allTasksIndex].push(payload);
        } else {
          state.allTasks.push({
            _id: payload._id,
            title: payload.title,
            start: payload.start,
            end: payload.end,
            priority: payload.priority,
            date: payload.date,
            category: payload.category,
            owner: payload.owner,
            createdAt: payload.createdAt,
          });
        }

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
        state.tasksCurrentMonth = state.tasksCurrentMonth.filter((task) => task._id !== payload._id);
        state.allTasks = state.allTasks.filter((task) => task._id !== payload._id);
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
        const updatedTaskIndex = state.allTasks.findIndex((task) => task.id === payload.id);
        if (updatedTaskIndex !== -1) {
          state.allTasks[updatedTaskIndex] = payload;
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
