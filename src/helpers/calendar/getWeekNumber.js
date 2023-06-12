export const getWeekNumber = (year, month, day) => {
    let date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    let yearStart = new Date(date.getFullYear(), 0, 1);
    let weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  
    return weekNo;
  };