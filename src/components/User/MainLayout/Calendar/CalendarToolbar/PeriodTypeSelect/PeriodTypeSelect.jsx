import React from 'react';
import { MonthDayBtn } from './PeriodTypeSelect.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarType } from 'redux/tasks/slice';
import { selectCalendarType, selectChoosedDate } from 'redux/tasks/selectors';
import { Link } from 'react-router-dom';

export const PeriodTypeSelect = (/* { date, type, changeType } */) => {
  
  const type = useSelector(selectCalendarType);
  const date = useSelector(selectChoosedDate);
  const dispatch = useDispatch();
  const handleClick = selectedType => {
    /* changeType(selectedType); */
    dispatch(setCalendarType(selectedType))
  };
/* 
  if (type === '') {
    return null;
  } */

  return (
    <div>
      <Link to={`month/${date}`}>
        <MonthDayBtn
          isActive={type === 'month'}
          onClick={() => handleClick('month')}
        >
          Month
        </MonthDayBtn>
      </Link>

      <Link to={`day/${date}`}>
        <MonthDayBtn
          isActive={type === 'day'}
          swith="day"
          onClick={() => handleClick('day')}
        >
          Day
        </MonthDayBtn>
      </Link>
    </div>
  );
};
