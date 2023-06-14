import { getPreviousAndNextMonths } from "./getPreviousAndNextMonths";

export const getCalendarCellsStructuree = settesDate => {
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

function getWeekNumberr(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    let yearStart = new Date(date.getFullYear(), 0, 1);
    let weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  
    return weekNo;
};

function getWeekDates(year, weekNumber) {
    var firstDayOfYear = new Date(year, 0, 1);
    var daysToFirstMonday = (8 - firstDayOfYear.getDay()) % 7;
    var firstMondayOfYear = new Date(year, 0, 1 + daysToFirstMonday);
    var firstDayOfWeek = new Date(firstMondayOfYear.getTime() + (weekNumber - 1) * 7 * 86400000);
    var weekDates = [];
    for (var i = 0; i < 7; i++) {
      var date = new Date(firstDayOfWeek.getTime() + i * 86400000);
      if (date.getMonth() === 11 && date.getDate() > 25) {
        break;
      }
      weekDates.push(date.getDate());
    }
    return weekDates;
};

export function getCalendarCellsStructureee(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const monthArray = [];
  let week = [];
  let prevMonthDays = new Date(year, month, 0).getDate();
  let nextMonthDays = 1;
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push(prevMonthDays);
    prevMonthDays--;
  }
  for (let i = 1; i <= lastDayOfMonth; i++) {
    week.push(i);
    if (week.length === 7) {
      monthArray.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    for (let i = week.length; i < 7; i++) {
      week.push(nextMonthDays);
      nextMonthDays++;
    }
    monthArray.push(week);
  }
  return monthArray;
}

export function ggetCalendarCellsStructure(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstWeekDay = (firstDay.getDay() + 6) % 7; // adjust to start with Monday
  const weeks = [];
  let currentWeek = [];
  //let day = 1;
  // add days of previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    currentWeek.push(prevMonthLastDay - i);
  }
  // add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(i);
  }
  // add days of next month
  const lastWeekDay = (lastDay.getDay() + 6) % 7; // adjust to end with Sunday
  for (let i = 1; i <= 7 - lastWeekDay - 1; i++) {
    currentWeek.push(i);
  }
  weeks.push(currentWeek);
  return weeks;
}

export function getCalendarCellsStructure(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstWeekDay = (firstDay.getDay() + 6) % 7; // adjust to start with Monday
  const weeks = [];
  let currentWeek = [];
  //let day = 1;
  // add days of previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    currentWeek.push({day: prevMonthLastDay - i, month: getPreviousAndNextMonths(dateString).previousMonth});
  }
  // add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push({day:i, month: dateString.slice(0,7)});
  }
  // add days of next month
  const lastWeekDay = (lastDay.getDay() + 6) % 7; // adjust to end with Sunday
  for (let i = 1; i <= 7 - lastWeekDay - 1; i++) {
    currentWeek.push({day:i, month: getPreviousAndNextMonths(dateString).nextMonth});
  }
  weeks.push(currentWeek);
  return weeks;
}

console.log(getCalendarCellsStructure('2023-06-14'));