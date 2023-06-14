export function getWeekDates(year, weekNumber) {
    const firstDayOfYear = new Date(year, 0, 1);
    const daysToFirstMonday = (8 - firstDayOfYear.getDay()) % 7;
    const firstMondayOfYear = new Date(year, 0, 1 + daysToFirstMonday);
    const firstDayOfWeek = new Date(firstMondayOfYear.getTime() + (weekNumber - 1) * 7 * 86400000);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(firstDayOfWeek.getTime() + i * 86400000);
      if (date.getMonth() === 11 && date.getDate() > 31) {
        break;
      }
      weekDates.push(date.getDate());
    }
    return weekDates;
  };