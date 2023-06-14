import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { CalendarTableOneDay } from '../CalendarTableOneDay/CalendarTableOneDay';
import { getCalendarCellsStructure } from 'helpers/calendar';
import { CalendarTableContainer, Week } from './CalendarTable.styled';

export const CalendarTable = () => {

  const date = useSelector(selectChoosedDate);
  const calendarCells = getCalendarCellsStructure(date);

  return (
    <CalendarTableContainer>
        {calendarCells.map((week) => (
          <Week key={uuidv4()}>
              {week.map(day => (
                <CalendarTableOneDay
                    key={uuidv4()} 
                    date={day.day}
                    month={day.month}
                    picked={(day.day === parseInt(date.slice(8,10), 10) && day.month === date.slice(0,7))}
                />
        ))}
          </Week> 
        ))}
    </CalendarTableContainer>
  );
};
