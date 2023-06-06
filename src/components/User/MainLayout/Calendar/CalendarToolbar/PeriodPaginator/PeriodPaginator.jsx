import PropTypes from 'prop-types';
import {
  ChooseDayBtn,
  DateLabel,
  WrapperPaginator,
  WrapperPeriodBtn,
} from './PeriodPaginator.styled';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { format } from 'date-fns';
import { getDateDetails } from 'helpers';
// import { useState } from 'react';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  // прописати проптайпи для date, type, changeDate - //!++++

  // прописати логіку вибору buttonText залежно від type - //!++++

  // прописати функцію кліку стрілочок - зміна дати/місяця і передача нової дати в changeDate - //!+/- зробив поки тільки лог передає у форматі 6 Jul 2023
  // якщо змінюється місяць, то в переданій даті змінюється тільки поле місяця, число лишається попереднім //!++++

  // стилізувати використовуючи styled.components//!++++

  // додаткова фіча:
  // продумати і прописати логіку выдкриття маленького календаря по кнопці з датою/місяцем
  // отримання з нього вибраної дати чи місяця в змінну і передача її в changeDate

  // всі логічні перетворення одного формату дати в іншу можна виносити в окремий файл функції в хелперах//!+/- поки тут бо так плутаюся

  const data = getDateDetails(date);
  const { selectDate, monthName, year } = data;
  const dateFormated = date => format(date, 'd MMM yyyy');
  const dateForView = dateFormated(selectDate);
  const handlerClick = operation => {
    const changedDate = dateFormated(changeDate(date, type, operation));
    console.log(changedDate);
  };

  return (
    // !!!!!!!!!!!!!!!!!!!!DELETED OR COMMENTS <div> WHEN PUSH IN MAIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    <WrapperPaginator>
      <ChooseDayBtn
        onClick={() => console.log('calls the calendar to select a date')}
      >
        <DateLabel dateTime={date} style={{ color: 'white' }}>
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
