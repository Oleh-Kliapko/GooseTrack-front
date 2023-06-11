import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { fetchMonthTasks } from 'redux/tasks/operations';
import { CalendarTableOneDay } from '../CalendarTableOneDay/CalendarTableOneDay';
import { getCalendarCellsStructure } from 'helpers/calendar';
import { CalendarTableContainer, Week } from './CalendarTable.styled';

export const CalendarTable = () => {

  const date = useSelector(selectChoosedDate);
  const calendarCells = getCalendarCellsStructure(date);
  const choosedMonth = parseInt(date.split("-")[1]);

  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log('get month tasks');
  //   dispatch(fetchMonthTasks(choosedMonth))
  // }, [choosedMonth, dispatch])

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
