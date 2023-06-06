import { Outlet, useLocation } from 'react-router-dom';
import { CalendarContainer, DayAndMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useState } from 'react';

const CalendarPage = () => {
  const [date, setDate] = useState('2023-06-06'/* date */);

  // отримати поточну дату в потрібному форматі
  // const date = Date.now();

  //прописати дейт в маршрут

  const [type, setType] = useState('month');

  const location = useLocation();
  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname.endsWith('/calendar/day')) {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);

  return (
    <CalendarContainer>

      <CalendarToolbar date={date} changeDate={setDate} type={type} changeType={setType}/>

      <DayAndMonthsContainer>
        <Outlet />
      </DayAndMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
