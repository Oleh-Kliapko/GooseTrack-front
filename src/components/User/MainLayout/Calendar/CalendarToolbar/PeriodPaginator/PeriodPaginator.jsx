import PropTypes from 'prop-types';
import {
  ChooseDayBtn,
  DateLabel,
  /*   WrapPeriodBtn, */
  WrapperPaginator,
  WrapperPeriodBtn,
  /*   WrapperPeriodBtn, */
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';

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
      prevDate = `${date.slice(0, 8)}${(parseInt(date.slice(8, 10), 10) - 1)
        .toString()
        .padStart(2, 0)}`;
      nextDate = `${date.slice(0, 8)}${(parseInt(date.slice(8, 10), 10) + 1)
        .toString()
        .padStart(2, 0)}`;
      buttonText = `${parseInt(date.slice(8, 10))} ${monthArray[
        parseInt(date.slice(5, 7)) - 1
      ].slice(0, 3)} ${date.slice(0, 4)}`;
      break;
    case 'month':
      prevDate = `${date.slice(0, 5)}${(parseInt(date.slice(5, 7), 10) - 1)
        .toString()
        .padStart(2, 0)}${date.slice(7, 10)}`;
      nextDate = `${date.slice(0, 5)}${(parseInt(date.slice(5, 7), 10) + 1)
        .toString()
        .padStart(2, 0)}${date.slice(7, 10)}`;
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
          onClick={() => changeDate(prevDate)}
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
