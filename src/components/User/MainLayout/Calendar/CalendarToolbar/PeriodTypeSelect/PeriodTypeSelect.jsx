import { MonthDayBtn } from './PeriodTypeSelect.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarType } from 'redux/tasks/slice';
import { selectCalendarType, selectChoosedDate } from 'redux/tasks/selectors';
import { Link } from 'react-router-dom';

export const PeriodTypeSelect = () => {
  
  const type = useSelector(selectCalendarType);
  const date = useSelector(selectChoosedDate);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={`month/${date}`}>
        <MonthDayBtn
          isActive={type === 'month'}
          onClick={() => dispatch(setCalendarType('month'))}
        >
          Month
        </MonthDayBtn>
      </Link>

      <Link to={`day/${date}`}>
        <MonthDayBtn
          isActive={type === 'day'}
          swith="day"
          onClick={() => dispatch(setCalendarType('day'))}
        >
          Day
        </MonthDayBtn>
      </Link>
    </div>
  );
};
