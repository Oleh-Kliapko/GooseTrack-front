import PropTypes from 'prop-types';
import {
  ChooseDayBtn,
  DateLabel,
  WrapPeriodBtn,
  WrapperPaginator,
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { format } from 'date-fns';
import { getChangedDate, getCurrentDate, getDateDetails } from 'helpers';
import { useState } from 'react';
import { useParams } from 'react-router';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  // let { currentDate } = useParams();
  const { currentDate } = useParams();
  const [dateState, setDateState] = useState(date);
  // прописати функцію кліку стрілочок - зміна дати/місяця і передача нової дати в changeDate -
  //!+/- зробив поки тільки лог, передавати далі або через контекст або через редакс

  // додаткова фіча:
  // продумати і прописати логіку выдкриття маленького календаря по кнопці з датою/місяцем
  // отримання з нього вибраної дати чи місяця в змінну і передача її в changeDate

  //we get the details of recieved date
  const data = getDateDetails(dateState);
  const { selectDate, monthName, year } = data;

  // function for formated date in pattern 'd MMM yyyy' with help date-fns
  const dateFormated = date => format(date, 'd MMM yyyy');
  // date format for provided that the type is day
  const dateForView = dateFormated(selectDate);

  const handlerClick = operation => {
    //decreases or increases date
    const clickDate = getChangedDate(dateState, type, operation);
    //formated date in initial format which we get for the first render
    const dateInInitialFormat = getCurrentDate(clickDate);

    //everything is clear here anyway
    setDateState(dateInInitialFormat);
  };

  // currentDate = dateState;

  // console.log('PeriodPaginator  currentDate from useParams:', currentDate);
  // console.log('PeriodPaginator  dateState from useState:', dateState);

  // const newPrevDate = `${date.slice(0, 8)}${(
  //   parseInt(date.slice(8, 10), 10) - 1
  // )
  //   .toString()
  //   .padStart(2, 0)}`;
  // const newNextDate = `${date.slice(0, 8)}${(
  //   parseInt(date.slice(8, 10), 10) + 1
  // )
  //   .toString()
  //   .padStart(2, 0)}`;

  return (
    <WrapperPaginator>
      <ChooseDayBtn
        onClick={() => console.log('calls the calendar to select a date')}
      >
        <DateLabel dateTime={dateState} style={{ color: 'white' }}>
          {type === 'month' ? (
            <>
              {monthName.slice(0, 3)} {year}
            </>
          ) : (
            <>{dateForView}</>
          )}
        </DateLabel>
      </ChooseDayBtn>
      <WrapPeriodBtn>
        <PeriodBtn
          onClick={() => handlerClick('decrease')}
          // to={`${type}/${currentDate}`}
          to={`${type}/${dateState}`}
        >
          <IconPag id="left" />
        </PeriodBtn>
        <PeriodBtn
          onClick={() => handlerClick('increment')}
          id="right"
          // to={`${type}/${currentDate}`}
          to={`${type}/${dateState}`}
        >
          <IconPag />
        </PeriodBtn>
      </WrapPeriodBtn>
    </WrapperPaginator>
  );
};

PeriodPaginator.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
};
