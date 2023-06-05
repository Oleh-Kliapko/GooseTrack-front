import { CalendarHead } from '../../CalendarHead/DayCalendarHead';
import { useParams } from 'react-router';

export const DayCalendarHead = () => {
  const day = useParams();
  const { currentDay } = day;

  return <CalendarHead currentDay={currentDay} />;
};
