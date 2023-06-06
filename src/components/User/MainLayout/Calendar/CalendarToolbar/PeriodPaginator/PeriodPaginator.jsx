import PropTypes from 'prop-types';
import {
  ChooseDayBtn,
  DateLabel,
  WrapperPaginator,
  WrapperPeriodBtn,
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { format } from 'date-fns';
import { getCurrentDate, getDateDetails } from 'helpers';
import { useState } from 'react';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  const [dateState, setDateState] = useState(date);

  // прописати функцію кліку стрілочок - зміна дати/місяця і передача нової дати в changeDate -
  //!+/- зробив поки тільки лог, передавати далі або через контекст або через редакс

  // додаткова фіча:
  // продумати і прописати логіку выдкриття маленького календаря по кнопці з датою/місяцем
  // отримання з нього вибраної дати чи місяця в змінну і передача її в changeDate

  // всі логічні перетворення одного формату дати в іншу можна виносити в окремий файл функції в хелпера
  //!+/- поки тут бо так плутаюся

  //we get the details of recieved date
  const data = getDateDetails(dateState);
  const { selectDate, monthName, year } = data;

  // function for formated date in pattern 'd MMM yyyy' with help date-fns
  const dateFormated = date => format(date, 'd MMM yyyy');
  // date format for provided that the type is day
  const dateForView = dateFormated(selectDate);

  const handlerClick = operation => {
    //decreases or increases date
    const clickDate = changeDate(dateState, type, operation);
    //formated date in initial format which we get for the first render
    const dateInInitialFormat = getCurrentDate(clickDate);
    // console.log("handlerClick  dateInInitialFormat:", dateInInitialFormat)

    //everything is clear here anyway
    setDateState(dateInInitialFormat);
  };

  return (
    <WrapperPaginator>
      <ChooseDayBtn
        onClick={() => console.log('calls the calendar to select a date')}
      >
        <DateLabel dateTime={dateState} style={{ color: 'white' }}>
          {type === 'month' ? (
            <>
              {monthName} {year}
            </>
          ) : (
            <>{dateForView}</>
          )}
        </DateLabel>
      </ChooseDayBtn>
      <WrapperPeriodBtn>
        <PeriodBtn onClick={() => handlerClick('decrease')}>
          <IconPag id="left" />
        </PeriodBtn>
        <PeriodBtn onClick={() => handlerClick('increment')} id="right">
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
