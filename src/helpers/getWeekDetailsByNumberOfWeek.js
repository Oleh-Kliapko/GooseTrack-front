import { getWeekNumber, dayNamesArray } from './index';

export const getWeekDetailsByNumberOfWeek = (weekNumber, year) => {
  const currentDate = new Date();
  const currentWeekNumber = getWeekNumber(currentDate);
/* 
  if (weekNumber < currentWeekNumber) {
    // Handle case where provided week number is in the past
    return {
      Error:
        'Invalid week number. Please provide a week number in the future or the current week in getWeekDetailsByNumberOfWeek.',
    };
  } */

  const days = {};
  const startDate = new Date();

  // !Move to the first day of the desired week
  /*calculates the starting date of the desired week by adding the difference between
  the desired week number and the current week number multiplied by 7 days to the current date */
  startDate.setDate(startDate.getDate() + (weekNumber - currentWeekNumber) * 7);

  // Iterate through each day of the week and populate the days object
  for (let i = 0; i < 7; i++) {
    const currentDayOfWeek = startDate.getDay();
    const currentDayOfMonth = startDate.getDate();

    days[dayNamesArray[currentDayOfWeek]] = currentDayOfMonth;

    startDate.setDate(startDate.getDate() + 1);
  }

  return {
    number: weekNumber,
    days: days,
  };
};
