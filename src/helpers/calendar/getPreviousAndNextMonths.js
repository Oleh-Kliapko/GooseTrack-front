export function getPreviousAndNextMonths(monthString) {
  const [yearStr, monthStr] = monthString.split('-');
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const previousMonth = month === 1 ? 12 : month - 1;
  const previousYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  return {
    previousMonth: `${previousYear}-${previousMonth
      .toString()
      .padStart(2, '0')}`,
    nextMonth: `${nextYear}-${nextMonth.toString().padStart(2, '0')}`,
  };
}
