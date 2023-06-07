import { createSelector } from '@reduxjs/toolkit';

export const selectErrorTasks = state => state?.tasks?.error;
export const selectIsLoadingTasks = state => state?.tasks?.isLoading;
export const selectTasksCurrentMonth = state => state?.tasks?.tasksCurrentMonth;
export const selectAllTasks = state => state?.tasks?.allTasks;

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

export const selectTasksForCurrentDate = createSelector(
  selectTasksCurrentMonth,
  (tasksCurrentMonth) => {
    let currentTasks = tasksCurrentMonth.filter((task) => {
      const taskDate = new Date(task.date);
      const taskDateStr = taskDate.toISOString().slice(0, 10);
      return taskDateStr === currentDate;
    });
    return currentTasks;
  },
);
