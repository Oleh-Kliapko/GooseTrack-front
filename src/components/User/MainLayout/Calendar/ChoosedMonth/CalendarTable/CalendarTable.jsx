import { useSelector } from 'react-redux';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { CalendarTableOneDay } from '../CalendarTableOneDay/CalendarTableOneDay';
import { getCalendarCellsStructure } from 'helpers/calendar';
import { CalendarTableContainer, Week } from './CalendarTable.styled';
import { v4 as uuidv4 } from 'uuid';

export const CalendarTable = () => {
  const date = useSelector(selectChoosedDate);
  const calendarCells = getCalendarCellsStructure(date);

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let cellsWithoutFirstAndLastArray = calendarCells.slice(1, 4);
  let firstArrayFromCells = calendarCells[0].filter(day => day < 7); //without last day previous month
  let fourthArrayFromCells = calendarCells[4].filter(day => day > 7); //without day next month
  let fifthArrayFromCells = [];
  if (calendarCells[5]) {
    fifthArrayFromCells = calendarCells[5].filter(day => day > 7); //without day next month
  }
  let cutCalendarCells = [
    firstArrayFromCells,
    ...cellsWithoutFirstAndLastArray,
    fourthArrayFromCells,
    fifthArrayFromCells,
  ];

  switch (firstArrayFromCells.length) {
    case 1:
      firstArrayFromCells.splice(0, 0, '', '', '', '', '', '');
      break;
    case 2:
      firstArrayFromCells.splice(0, 0, '', '', '', '', '');
      break;
    case 3:
      firstArrayFromCells.splice(0, 0, '', '', '', '');
      break;
    case 4:
      firstArrayFromCells.splice(0, 0, '', '', '');
      break;
    case 5:
      firstArrayFromCells.splice(0, 0, '', '');
      break;
    case 6:
      firstArrayFromCells.splice(0, 0, '');
      break;

    default:
      firstArrayFromCells.slice(-7);
      break;
  }

  switch (fourthArrayFromCells.length) {
    case 1:
      fourthArrayFromCells.splice(1, 0, '', '', '', '', '', '');
      break;
    case 2:
      fourthArrayFromCells.splice(2, 0, '', '', '', '', '');
      break;
    case 3:
      fourthArrayFromCells.splice(3, 0, '', '', '', '');
      break;
    case 4:
      fourthArrayFromCells.splice(4, 0, '', '', '');
      break;
    case 5:
      fourthArrayFromCells.splice(5, 0, '', '');
      break;
    case 6:
      fourthArrayFromCells.splice(6, 0, '');
      break;

    default:
      fourthArrayFromCells = [];
      break;
  }

  switch (fifthArrayFromCells.length) {
    case 1:
      fifthArrayFromCells.splice(1, 0, '', '', '', '', '', '');
      break;
    case 2:
      fifthArrayFromCells.splice(2, 0, '', '', '', '', '');
      break;
    default:
      fifthArrayFromCells = [];
      break;
  }
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <CalendarTableContainer>
      {cutCalendarCells.map(week => (
        <Week key={week}>
          {week.map(day => (
            <CalendarTableOneDay
              key={uuidv4()}
              date={day}
              picked={day === parseInt(date.slice(8, 10), 10)}
            />
          ))}
        </Week>
      ))}
    </CalendarTableContainer>
  );
};
