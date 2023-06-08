import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';
import { useOutletContext } from 'react-router';

export function DayCalendarHead({ clickChooseDay }) {
  const [date, setDate] = useOutletContext();
  const numbersOfDays = [5, 6, 7, 8, 9, 10, 11];
  const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const choosedNumberOfDayInNumberFormat = parseInt(date.slice(8,10));
  const makeCorrectFormatOfStringDate = (dayNumber) => {
    return `${date.slice(0,8)}${dayNumber.toString().padStart(2,0)}`
  }
  console.log('here');
  console.log(makeCorrectFormatOfStringDate(5));
  return (
    <Container>
      <DateWrapper>
        {numbersOfDays.map((dayNumber, index) => {
          return(
            <WeekInfoWrapper>
            <DayOfWeek>{dayNames[index]}</DayOfWeek>
            <DateContainer picked={(dayNumber === choosedNumberOfDayInNumberFormat)}
               onClick={() => setDate(makeCorrectFormatOfStringDate(dayNumber))}
               to={`day/${makeCorrectFormatOfStringDate(dayNumber)}`}
            >
              <p>{dayNumber}</p>
            </DateContainer>
          </WeekInfoWrapper>
          )
        })}
      </DateWrapper>
    </Container>
  );
}
