import {
  DatePicka,
  DatePickWrapper,
  WrapperPaginator,
  WrapperPeriodBtn,
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCalendarType, selectChoosedDate } from 'redux/tasks/selectors';
import { setChoosedDate } from 'redux/tasks/slice';
import { Link } from 'react-router-dom';
import {
  getPreviousAndNextDays,
  getPreviousAndNextMonths,
} from 'helpers/calendar';
import { ChooseDayInput } from './ChooseDayInput';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

//
const lang = localStorage.getItem('i18nextLng');
let months;
if (lang === 'ua') {
  // days = ['П', 'В', 'С', 'Ч', 'П', 'С', 'Н'];
  months = [
    'Січ',
    'Лют',
    'Бер',
    'Квіт',
    'Трав',
    'Черв',
    'Лип',
    'Серп',
    'Вер',
    'Жовт',
    'Лист',
    'Груд',
  ];
} else if (lang === 'en') {
  // days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
}

//

export const PeriodPaginator = () => {
  const date = useSelector(selectChoosedDate);
  const type = useSelector(selectCalendarType);
  //
  const { t } = useTranslation();
  const daysString = t(`calendarNames.days`);
  const daysArray = daysString.split(',');
  const locale = {
    localize: {
      day: n => daysArray[n],
      month: n => months[n],
    },
    formatLong: {
      date: () => 'd MMM yyyy',
    },
  };
  //

  const dispatch = useDispatch();

  const onDateButton = date => {
    const formatDate = format(new Date(date), 'yyyy-MM-dd');
    dispatch(setChoosedDate(formatDate));
  };

  let prevDate;
  let nextDate;

  switch (type) {
    case 'day':
      prevDate = getPreviousAndNextDays(date).previousDay;
      nextDate = getPreviousAndNextDays(date).nextDay;
      break;
    case 'month':
      prevDate = `${
        getPreviousAndNextMonths(date.slice(0, 7)).previousMonth
      }${date.slice(7, 10)}`;
      nextDate = `${
        getPreviousAndNextMonths(date.slice(0, 7)).nextMonth
      }${date.slice(7, 10)}`;
      break;

    default:
      prevDate = date;
      nextDate = date;
      break;
  }

  return (
    <WrapperPaginator>
      <DatePickWrapper type={type}>
        {type === 'month' ? (
          <DatePicka
            dateFormat="MMM yyyy"
            selected={new Date(date)}
            onChange={date => onDateButton(date)}
            customInput={<ChooseDayInput />}
            showMonthYearPicker
            locale={locale}
          />
        ) : (
          <DatePicka
            dateFormat="d MMM yyyy"
            selected={new Date(date)}
            onChange={date => onDateButton(date)}
            customInput={<ChooseDayInput />}
            calendarStartDay={1}
            locale={locale}
          />
        )}
      </DatePickWrapper>

      <WrapperPeriodBtn>
        <Link to={`${type}/${prevDate}`}>
          <PeriodBtn
            onClick={() => {
              dispatch(setChoosedDate(prevDate));
            }}
          >
            <IconPag id="left" />
          </PeriodBtn>
        </Link>

        <Link to={`${type}/${nextDate}`}>
          <PeriodBtn
            onClick={() => {
              dispatch(setChoosedDate(nextDate));
            }}
            id="right"
          >
            <IconPag />
          </PeriodBtn>
        </Link>
      </WrapperPeriodBtn>
    </WrapperPaginator>
  );
};
