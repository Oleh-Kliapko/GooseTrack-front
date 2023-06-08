import React from 'react';
import { MonthDayBtn } from './PeriodTypeSelect.styled';

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
        onClick={() => handleClick('month')}
      >
        Month
      </MonthDayBtn>

      <MonthDayBtn
        isActive={type === 'day'}
        swith="day"
        onClick={() => handleClick('day')}
      >
        Day
      </MonthDayBtn>
    </div>
  );
};
