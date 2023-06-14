import { getWeekDates } from "./getWeekDates";
import { getWeekNumber } from "./getWeekNumber";

export const getWeekDaysArrayy = date => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const week = getWeekNumber(
      parseInt(year, 10),
      parseInt(month, 10),
      parseInt(day, 10)
    );
    const array = getWeekDates(parseInt(year, 10), parseInt(week, 10));
    return array;
  };

  export const getWeekDaysArray = dateString => {
    const date = new Date(dateString);
  const firstDay = new Date(date);
  const lastDay = new Date(date);
  const firstWeekDay = (firstDay.getDay() + 6) % 7; // adjust to start with Monday
  const lastWeekDay = (lastDay.getDay() + 6) % 7; // adjust to end with Sunday
  firstDay.setDate(firstDay.getDate() - firstWeekDay);
  lastDay.setDate(lastDay.getDate() + 7 - lastWeekDay - 1);
  const weekArray = [];
  for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
    weekArray.push(d.getDate());
  }
  return weekArray;
};
