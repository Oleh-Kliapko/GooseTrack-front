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

export function getCalendarCellsStructure(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const monthArray = [];
  let week = [];
  let day = 1;
  // Add days from previous month
  const previousMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    week.unshift(previousMonthLastDay - i);
  }
  // Add days from current month
  for (let i = 1; i <= lastDayOfMonth; i++) {
    week.push(i);
    if (week.length === 7) {
      monthArray.push(week);
      week = [];
    }
  }
  // Add days from next month
  const nextMonthDaysNeeded = week.length === 0 ? 0 : 7 - week.length;
  const nextMonthFirstDay = new Date(year, month + 1, 1).getDay();
  for (let i = 1; i <= nextMonthDaysNeeded; i++) {
    week.push(i);
  }
  if (week.length > 0) {
    monthArray.push(week);
    week = [];
  }
  for (let i = 1; i <= 6 - monthArray.length; i++) {
    for (let j = 0; j < 7; j++) {
      week.push(day++);
    }
    monthArray.push(week);
    week = [];
  }
  return monthArray;
}