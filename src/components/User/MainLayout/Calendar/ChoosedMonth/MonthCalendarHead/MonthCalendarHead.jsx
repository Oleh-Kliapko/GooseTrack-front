import { dayNamesArray } from 'helpers/calendar';
import { ListDay, DayBtn, ItemDay } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  return (
    <ListDay>
      {dayNamesArray.map((day, i) => (
        <ItemDay key={i}>
          <DayBtn id={day}>{day.slice(0, 3)}</DayBtn>
        </ItemDay>
      ))}
    </ListDay>
  );
};
