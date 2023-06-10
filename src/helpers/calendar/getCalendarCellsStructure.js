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