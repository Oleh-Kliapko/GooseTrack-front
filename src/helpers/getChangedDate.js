export const getChangedDate = (dateString, type, operation) => {
  const types = ['month', 'day'];
  if (!types.includes(type)) {
    throw new Error(
      `Invalid type specified in changedDate, received ${type} and should receive ${types}`
    );
  }

  if (type === 'month') {
    if (operation === 'increment') {
      return getNextMonthDate(dateString);
    } else if (operation === 'decrease') {
      return getPreviousMonthDate(dateString);
    }
  } else if (type === 'day') {
    if (operation === 'increment') {
      return getNextWeekDate(dateString);
    } else if (operation === 'decrease') {
      return getPreviousWeekDate(dateString);
    }
  }
};

const getNextMonthDate = dateString => {
  const date = new Date(dateString);
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  let nextMonth;
  let nextYear;

  if (currentMonth === 11) {
    nextMonth = 0;
    nextYear = currentYear + 1;
  } else {
    nextMonth = currentMonth + 1;
    nextYear = currentYear;
  }

  const nextMonthDate = new Date(nextYear, nextMonth, date.getDate());

  return nextMonthDate;
};

const getPreviousMonthDate = dateString => {
  const date = new Date(dateString);
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  let previousMonth;
  let previousYear;

  if (currentMonth === 0) {
    previousMonth = 11;
    previousYear = currentYear - 1;
  } else {
    previousMonth = currentMonth - 1;
    previousYear = currentYear;
  }

  const previousMonthDate = new Date(
    previousYear,
    previousMonth,
    date.getDate()
  );
  return previousMonthDate;
};

const getNextWeekDate = dateString => {
  const nextWeekDate = new Date(dateString);
  nextWeekDate.setDate(nextWeekDate.getDate() + 7);
  return nextWeekDate;
};

const getPreviousWeekDate = dateString => {
  const previousWeekDate = new Date(dateString);
  previousWeekDate.setDate(previousWeekDate.getDate() - 7);
  return previousWeekDate;
};
