// dateString yyyy-mm-dd

export function getPreviousAndNextDays(dateString) {
    var date = new Date(dateString);
    var previousDay = new Date(date.getTime() - 86400000);
    var nextDay = new Date(date.getTime() + 86400000);
    return {
      previousDay: previousDay.toISOString().slice(0, 10),
      nextDay: nextDay.toISOString().slice(0, 10)
    };
  }