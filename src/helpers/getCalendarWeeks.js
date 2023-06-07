export function getMonthWeekNumbers(year, month) {
    //var firstDayOfMonth = new Date(year, month - 1, 1);
    var daysInMonth = new Date(year, month, 0).getDate();
    var weekNumbers = [];
    for (var i = 1; i <= daysInMonth; i++) {
      var date = new Date(year, month - 1, i);
      var weekNumber = getWeekNumber(date);
      if (weekNumbers.indexOf(weekNumber) === -1) {
        weekNumbers.push(weekNumber);
      }
    }
    return weekNumbers;
  }
  
  function getWeekNumber(date) {
    var firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    var daysToFirstThursday = (11 - firstDayOfYear.getDay()) % 7;
    var firstThursdayOfYear = new Date(date.getFullYear(), 0, 1 + daysToFirstThursday);
    var weekNumber = Math.floor((date.getTime() - firstThursdayOfYear.getTime()) / 86400000 / 7) + 1;
    return weekNumber;
  }
  
  export function getWeeksInMonth(year, month) {
    // Create a date object for the first day of the month
    var firstDayOfMonth = new Date(year, month - 1, 1);
  
    // Get the number of the week for the first day of the month
    var firstWeekOfMonth = Math.ceil(firstDayOfMonth.getDate() / 7);
  
    // Create a date object for the last day of the month
    var lastDayOfMonth = new Date(year, month, 0);
  
    // Get the number of the week for the last day of the month
    var lastWeekOfMonth = Math.ceil(lastDayOfMonth.getDate() / 7);
  
    // Return an object with the week number for the first day of the month and the total number of weeks in the month
    return {
      firstWeek: firstWeekOfMonth,
      totalWeeks: lastWeekOfMonth - firstWeekOfMonth + 1
    };
  };

  export function getFirstAndLastDay(year, month) {
    let firstDay = new Date(year, month - 1, 1).getDate();
    let lastDay = new Date(year, month, 0).getDate();
  
    return [firstDay, lastDay];
  };

  export function getWeekNumberr(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    let yearStart = new Date(date.getFullYear(), 0, 1);
    let weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  
    return weekNo;
  }
  

  