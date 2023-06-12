import { useSelector } from 'react-redux';
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
          <Week key={week}>
              {week.map(day => (
                <CalendarTableOneDay
                    key={day} 
                    date={day}
                    picked={(day === parseInt(date.slice(8,10), 10))}
                />
        ))}
          </Week> 
        ))}
    </CalendarTableContainer>
  );
};
