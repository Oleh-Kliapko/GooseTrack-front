import PropTypes from 'prop-types';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';

import { CalendarToolbarWrapper } from './CalendarToolbar.styled';
import { PeriodTypeSelect } from './PeriodTypeSelect';

export const CalendarToolbar = ({ date, changeDate, type, changeType }) => {
  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator date={date} type={type} changeDate={changeDate} />

      <PeriodTypeSelect date={date} type={type} changeType={changeType} />
    </CalendarToolbarWrapper>
  );
};

CalendarToolbar.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  changeDate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
};
