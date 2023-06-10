import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { setChoosedDate } from 'redux/tasks/slice';
import { Link } from 'react-router-dom';
import { dayNamesArray, getWeekDaysArray } from 'helpers/calendar';


export function DayCalendarHead() {

  const dispatch = useDispatch();

  const date = useSelector(selectChoosedDate); // yyyy-mm-dd
  const choosedDay = parseInt(date.slice(8, 10)); //number format of day
  const days = getWeekDaysArray(date);
  const dayNames = dayNamesArray.map(day => day.toUpperCase().slice(0,3));

  const makeCorrectFormatOfStringDate = dayNumber => {
    return `${date.slice(0, 8)}${dayNumber.toString().padStart(2, 0)}`;
  };

  const onClickDate = (dayNumber) => {
    const newDate = makeCorrectFormatOfStringDate(dayNumber);
    dispatch(setChoosedDate(newDate));
  };

  return (
    <Container>
      <DateWrapper>
        {days.map((dayNumber, index) => {
          return (
            <Link 
              to={`/calendar/day/${makeCorrectFormatOfStringDate(dayNumber)}`} 
              key={index}
              onClick={() => onClickDate(dayNumber)}
            >
              <WeekInfoWrapper >
                <DayOfWeek id={index}>{dayNames[index]}</DayOfWeek>
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
    </Container>
  );
}
