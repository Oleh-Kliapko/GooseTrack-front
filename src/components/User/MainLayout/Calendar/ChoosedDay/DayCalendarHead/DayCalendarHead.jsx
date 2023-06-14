import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { setChoosedDate } from 'redux/tasks/slice';
import { Link } from 'react-router-dom';
import { getWeekDaysArray } from 'helpers/calendar';
import {
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';

export function DayCalendarHead() {
  const { t } = useTranslation();

  const daysString = t(`calendarNames.days`);
  const daysArray = daysString.split(',');

  const dispatch = useDispatch();

  const date = useSelector(selectChoosedDate); // yyyy-mm-dd
  const choosedDay = parseInt(date.slice(8, 10)); //number format of day
  const days = getWeekDaysArray(date);
  const dayNames = daysArray.map(day => day.toUpperCase().slice(0,3));

  const makeCorrectFormatOfStringDate = dayNumber => {
    return `${date.slice(0, 8)}${dayNumber.toString().padStart(2, 0)}`;
  };

  const onClickDate = (dayNumber) => {
    const newDate = makeCorrectFormatOfStringDate(dayNumber);
    dispatch(setChoosedDate(newDate));
  };

  return (
    <DateWrapper>
      {days.map((dayNumber, index) => {
        return (
          <Link 
            to={`/calendar/day/${makeCorrectFormatOfStringDate(dayNumber)}`} 
            key={index}
            onClick={() => onClickDate(dayNumber)}
          >
            <WeekInfoWrapper >
              <DayOfWeek id={index} name={dayNames[index]}>{dayNames[index]}</DayOfWeek>
              <DateContainer
                picked={dayNumber === choosedDay}
              >
                <p>{dayNumber}</p>
              </DateContainer>
            </WeekInfoWrapper>
          </Link>
        );
      })}
    </DateWrapper>
  );
}
