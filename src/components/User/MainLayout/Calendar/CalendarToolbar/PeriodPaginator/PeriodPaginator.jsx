import PropTypes from 'prop-types';
import {
  ChooseDayBtn,
  DateLabel,
  WrapperPaginator,
  WrapperPeriodBtn,
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import {
  getPreviousWeekDate,
  getNextWeekDate,
  getPreviousMonthDate,
  getNextMonthDate,
} from 'helpers';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  const monthArray = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];
  let prevDate;
  let nextDate;
  let buttonText;
  switch (type) {
    case 'day':
      prevDate = getPreviousWeekDate(date);
      nextDate = getNextWeekDate(date);
      buttonText = `${parseInt(date.slice(8, 10))} ${monthArray[
        parseInt(date.slice(5, 7)) - 1
      ].slice(0, 3)} ${date.slice(0, 4)}`;
      break;
    case 'month':
      prevDate = getPreviousMonthDate(date);
      nextDate = getNextMonthDate(date);
      buttonText = `${monthArray[parseInt(date.slice(5, 7)) - 1]} ${date.slice(
        0,
        4
      )} `;
      break;
    default:
      prevDate = date;
      nextDate = date;
      break;
  }

  return (
    <WrapperPaginator>
      <ChooseDayBtn
        onClick={() => console.log('calls the calendar to select a date')}
      >
        <DateLabel style={{ color: 'white' }}>{buttonText}</DateLabel>
      </ChooseDayBtn>
      <WrapperPeriodBtn>
        <PeriodBtn
          onClick={() => {
            changeDate(prevDate);
            console.log(prevDate);
          }}
          to={`${type}/${prevDate}`}
        >
          <IconPag id="left" />
        </PeriodBtn>
        <PeriodBtn
          onClick={() => changeDate(nextDate)}
          id="right"
          to={`${type}/${nextDate}`}
        >
          <IconPag />
        </PeriodBtn>
      </WrapperPeriodBtn>
    </WrapperPaginator>
  );
};

PeriodPaginator.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
};
