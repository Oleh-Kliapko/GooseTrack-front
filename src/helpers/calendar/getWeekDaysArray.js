import { getWeekDates } from "./getWeekDates";
import { getWeekNumber } from "./getWeekNumber";

export const getWeekDaysArray = date => {
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