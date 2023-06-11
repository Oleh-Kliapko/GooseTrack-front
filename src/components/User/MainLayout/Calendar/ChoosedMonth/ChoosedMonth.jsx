import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';
import { MonthCalendarContainer } from './ChoosedMonth.styled';

export const ChoosedMonth = () => {

  return (
    <MonthCalendarContainer>
      <MonthCalendarHead />
      <CalendarTable />
    </MonthCalendarContainer>
  );
};

export default ChoosedMonth;
