import React from 'react';
import { MonthDayBtn } from './PeriodTypeSelect.styled';
import { format, parseISO } from 'date-fns';

export const PeriodTypeSelect = ({ date, type, changeType }) => {
  const handleClick = selectedType => {
    changeType(selectedType);
  };

  if (type === '') {
    return null;
  }

  return (
    <div>
      <MonthDayBtn
        isActive={type === 'month'}
        href={`month/${format(parseISO(date), 'yyyy-MM-dd')}`}
        onClick={() => handleClick('month')}
      >
        Month
      </MonthDayBtn>

      <MonthDayBtn
        isActive={type === 'day'}
        swith="day"
        href={`day/${format(new Date(), 'yyyy-MM-dd')}`}
        onClick={() => handleClick('day')}
      >
        Day
      </MonthDayBtn>
    </div>
  );
};
