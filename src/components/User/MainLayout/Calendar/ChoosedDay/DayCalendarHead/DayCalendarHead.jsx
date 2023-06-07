import { dayNamesArray, getWeekDetails } from 'helpers';
import {
  DayBtn,
  ItemDay,
  ListDay,
} from '../../ChoosedMonth/MonthCalendarHead/MonthCalendarHead.styled';
import { getWeekDates } from 'helpers/getDataForWeek';
import { useParams } from 'react-router';

export const DayCalendarHead = () => {
  const days = dayNamesArray;
  //get the date from the route string parameter
  const { currentDay } = useParams();
  //get the number of the week
  const { number } = getWeekDetails('2023-06-07'); //currentDay instead of string
  const year = new Date('2023-06-07').getFullYear(); //currentDay instead of string
  console.log(year);
  //get dates on current week start with monday
  const dates = getWeekDates(year, number);
  //write in object all recieved data
  console.log(dates);
  return (
    <>
      <ListDay>
        {days.map((day, i) => (
          <ItemDay key={day}>
            <DayBtn id={day}>{day}</DayBtn>
          </ItemDay>
        ))}
      </ListDay>
      <ListDay>
        {dates.map((date, i) => (
          <ItemDay key={date}>
            <DayBtn id={date}>{date}</DayBtn>
          </ItemDay>
        ))}
      </ListDay>
    </>
  );
};
