import { ChooseDayBtn, DateLabel, WrapperPaginator, WrapperPeriodBtn} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCalendarType, selectChoosedDate } from 'redux/tasks/selectors';
import { setChoosedDate } from 'redux/tasks/slice';
import { Link } from 'react-router-dom';
import { getPreviousAndNextDays, getPreviousAndNextMonths } from 'helpers/calendar';
import { monthNamesArray } from 'helpers';


export const PeriodPaginator = () => {

  const date = useSelector(selectChoosedDate);
  const type = useSelector(selectCalendarType);

  const dispatch = useDispatch();

  const onDateButton = (date) => {
    // відкрити маленький календарик
    console.log('calls the calendar to select a date');
    // передати вибрану в календарику дату в стор
    dispatch(setChoosedDate('2023-12-12'));
  }

  let prevDate;
  let nextDate;
  let buttonText;
  
  switch (type) {
    case 'day':
      prevDate = getPreviousAndNextDays(date).previousDay;
      nextDate = getPreviousAndNextDays(date).nextDay;
      buttonText = `${parseInt(date.slice(8, 10))} ${monthNamesArray[
        parseInt(date.slice(5, 7)) - 1
      ].slice(0, 3)} ${date.slice(0, 4)}`;
      break;
    case 'month':
      prevDate = `${getPreviousAndNextMonths(date.slice(0,7)).previousMonth}${date.slice(7, 10)}`;
      nextDate = `${getPreviousAndNextMonths(date.slice(0,7)).nextMonth}${date.slice(7, 10)}`;
      buttonText = `${monthNamesArray[parseInt(date.slice(5, 7)) - 1]} ${date.slice(0,4)} `;
      break;
    default:
      prevDate = date;
      nextDate = date;
      break;
  };

  return (
    <WrapperPaginator>

      <ChooseDayBtn
        onClick={onDateButton}
      >
        <DateLabel style={{ color: 'white' }}>{buttonText}</DateLabel>
      </ChooseDayBtn>

      <WrapperPeriodBtn>

        <Link to={`${type}/${prevDate}`}>
          <PeriodBtn
            onClick={() => {dispatch(setChoosedDate(prevDate))}}
          >
            <IconPag id="left" />
          </PeriodBtn>
        </Link>

        <Link to={`${type}/${nextDate}`}>
          <PeriodBtn
            onClick={() => {dispatch(setChoosedDate(nextDate))}}
            id="right"
          >
            <IconPag />
          </PeriodBtn>
        </Link>

      </WrapperPeriodBtn>

    </WrapperPaginator>
  );
};
