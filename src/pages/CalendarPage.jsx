import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { CalendarContainer, ChoosedDayOrMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useEffect, useState } from 'react';

const CalendarPage = () => {
  const [date, setDate] = useState('2023-06-06'/* date */);

  // отримати поточну дату в потрібному форматі
  // const date = Date.now();
  // або const date = useSelector(селектор від Альони по якому отримувати і змінювати поточну дату)

  //прописати дейт в маршрут

  const [type, setType] = useState('month');

  const location = useLocation();
  const pathname = location.pathname.slice(0, -11);
  const dateFromPath = useParams().currentDate;
  console.log(dateFromPath);
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

      <Navigate to={`/calendar/${type}/${date}`}/>
      <ChoosedDayOrMonthsContainer>
        <Outlet date={date}/>
      </ChoosedDayOrMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
