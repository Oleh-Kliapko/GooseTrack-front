import { createSelector } from '@reduxjs/toolkit';

export const selectChoosedDate = state => state?.tasks?.choosedDate;
export const selectCalendarType = state => state?.tasks?.calendarType;
export const selectIsTaskModalOpen = state => state?.tasks?.isTaskModalOpen;
export const selectIsCurrentTaskEditing = state =>
  state?.tasks?.isCurrentTaskEditing;
export const selectMonthTasks = state => state?.tasks?.monthTasks;
export const selectIsCurrentDateBusy = state => state?.tasks?.isCurrentDateBusy;
export const selectCurrentTask = state => state?.tasks?.currentTask;
export const selectErrorTasks = state => state?.tasks?.error;
export const selectIsLoadingTasks = state => state?.tasks?.isLoading;
export const selectIsTodayBusy = state => state?.tasks?.isTodayBusy;
export const selectTasksCurrentMonth = state => state?.tasks?.tasksCurrentMonth;
export const selectAllTasks = state => state?.tasks?.allTasks;

export const selectIsMoving = state => state?.tasks?.dragNdrop.isMoving;
export const selectTopOfTaskCard = state => state?.tasks?.dragNdrop.topOfTaskCard;
export const selectLeftOfTaskCard = state => state?.tasks?.dragNdrop.leftOfTaskCard;


const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

export const selectTasksForCurrentDate = createSelector(
  selectTasksCurrentMonth,
  tasksCurrentMonth => {
    let currentTasks = tasksCurrentMonth.filter(task => {
      const taskDate = new Date(task.date);
      const taskDateStr = taskDate.toISOString().slice(0, 10);
      return taskDateStr === currentDate;
    });
    return currentTasks;
  }
);
