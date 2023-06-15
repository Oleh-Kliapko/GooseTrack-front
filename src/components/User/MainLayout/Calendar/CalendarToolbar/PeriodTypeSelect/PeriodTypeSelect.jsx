import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { setCalendarType } from 'redux/tasks/slice';
import { selectCalendarType, selectChoosedDate } from 'redux/tasks/selectors';
import { MonthDayBtn } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  const type = useSelector(selectCalendarType);
  const date = useSelector(selectChoosedDate);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <Link to={`month/${date}`}>
        <MonthDayBtn
          isActive={type === 'month'}
          onClick={() => dispatch(setCalendarType('month'))}
        >
          {t(`calendarToolbar.Month`)}
        </MonthDayBtn>
      </Link>

      <Link to={`day/${date}`}>
        <MonthDayBtn
          isActive={type === 'day'}
          swith="day"
          onClick={() => dispatch(setCalendarType('day'))}
        >
          {t(`calendarToolbar.Day`)}
        </MonthDayBtn>
      </Link>
    </div>
  );
};
