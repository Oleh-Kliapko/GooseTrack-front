const getNextMonthDate = dateString => {
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based in JavaScript
  const day = parseInt(dateParts[2]);

  const currentDate = new Date(year, month, day);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let nextMonth;
  let nextYear;

  if (currentMonth === 11) {
    nextMonth = 0;
    nextYear = currentYear + 1;
  } else {
    nextMonth = currentMonth + 1;
    nextYear = currentYear;
  }

  const nextMonthDate = new Date(nextYear, nextMonth, day + 1);

  return nextMonthDate.toISOString().slice(0, 10);
};

const getPreviousMonthDate = dateString => {
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based in JavaScript
  const day = parseInt(dateParts[2]);

  const currentDate = new Date(year, month, day);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let previousMonth;
  let previousYear;

  if (currentMonth === 0) {
    previousMonth = 11;
    previousYear = currentYear - 1;
  } else {
    previousMonth = currentMonth - 1;
    previousYear = currentYear;
  }

  const previousMonthDate = new Date(previousYear, previousMonth, day + 1);
  return previousMonthDate.toISOString().slice(0, 10);
};

const getNextWeekDate = dateString => {
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based in JavaScript
  const day = parseInt(dateParts[2]);

  const currentDate = new Date(year, month, day);
  currentDate.setDate(currentDate.getDate() + 7);

  const nextWeekYear = currentDate.getFullYear();
  const nextWeekMonth = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const nextWeekDay = currentDate.getDate().toString().padStart(2, '0');

  const nextWeekDate = `${nextWeekYear}-${nextWeekMonth}-${nextWeekDay}`;
  return nextWeekDate;
};

const getPreviousWeekDate = dateString => {
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based in JavaScript
  const day = parseInt(dateParts[2]);

  const currentDate = new Date(year, month, day);
  currentDate.setDate(currentDate.getDate() - 7);

  const previousWeekYear = currentDate.getFullYear();
  const previousWeekMonth = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const previousWeekDay = currentDate.getDate().toString().padStart(2, '0');

  const previousWeekDate = `${previousWeekYear}-${previousWeekMonth}-${previousWeekDay}`;
  return previousWeekDate;
};

export {
  getPreviousWeekDate,
  getNextWeekDate,
  getPreviousMonthDate,
  getNextMonthDate,
};
