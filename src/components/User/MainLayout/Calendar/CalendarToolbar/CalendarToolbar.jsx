import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = () => {

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </CalendarToolbarWrapper>
  );
};
