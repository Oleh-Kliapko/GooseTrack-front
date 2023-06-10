import { getWeekNumberr } from "helpers/getCalendarWeeks";
import { getWeekDates } from "helpers/getDataForWeek";

export const createTaskObject = (currentTask, formValues) => {
    return {
      _id: currentTask._id,
      title: formValues.title || '',
      start: formValues.start || '00:00',
      end: formValues.end || '00:00',
      priority: formValues.priority || 'low',
      date: currentTask.date,
      category: formValues.category || 'to-do'
    }
  };

export const getCalendarCellsStructure = settesDate => {
    const year = settesDate.slice(0, 4);
    const month = settesDate.slice(5, 7);
    const numberOffirstWeek = getWeekNumberr(
      parseInt(year, 10),
      parseInt(month, 10),
      1
    );
    const lastDay = new Date(year, month, 0).getDate();
    const numberOfLastWeek = getWeekNumberr(
      parseInt(year, 10),
      parseInt(month, 10),
      lastDay
    );
    const getWeekNumbersArray = () => {
      let array = [];
      let weekNumber = numberOffirstWeek;
      do {
        array.push(weekNumber);
        weekNumber += 1;
      } while (weekNumber <= numberOfLastWeek);
      return array;
    };
    const weekNumbersArray = getWeekNumbersArray();
    const daysArray = weekNumbersArray.map(week => {
      return getWeekDates(parseInt(year, 10), parseInt(week, 10));
    });
    return daysArray;
  };
