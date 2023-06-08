import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';
import { useOutletContext } from 'react-router';
import { getWeekDates } from 'helpers/getDataForWeek';
import { useEffect, useState } from 'react';

// при рефакторингу перенести фунції нижче в хелпери
const getWeekNumber = (year, month, day) => {
  let date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  let yearStart = new Date(date.getFullYear(), 0, 1);
  let weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);

  return weekNo;
}

const getWeekDaysArray = (date) => {
  const year = date.slice(0,4);
  const month = date.slice(5,7);
  const day = date.slice(8,10)
  const week = getWeekNumber(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
  const array = getWeekDates(parseInt(year, 10), parseInt(week, 10));
  return array;
};

export function DayCalendarHead() {
  const [date, setDate] = useOutletContext();
  const [days, setDays] = useState([]);

  useEffect(()=>{
    const numbersOfDays = getWeekDaysArray(date);
    setDays(numbersOfDays);
  }, [date])

  const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']; // в майбутньому винести в окремий файл підтримки зміни мови
  const choosedNumberOfDayInNumberFormat = parseInt(date.slice(8,10));
  const makeCorrectFormatOfStringDate = (dayNumber) => {
    return `${date.slice(0,8)}${dayNumber.toString().padStart(2,0)}`
  }
  return (
    <Container>
      <DateWrapper>
        {days.map((dayNumber, index) => {
          return(
            <WeekInfoWrapper key={index}>
              <DayOfWeek>{dayNames[index]}</DayOfWeek>
              <DateContainer 
                picked={(dayNumber === choosedNumberOfDayInNumberFormat)}
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
