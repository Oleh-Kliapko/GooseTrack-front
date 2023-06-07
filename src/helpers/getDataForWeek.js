export function getWeekDates(year, weekNumber) {
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