import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { CalendarContainer, ChoosedDayOrMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useState } from 'react';

const CalendarPage = () => {

  // отримати поточну дату в потрібному форматі
  // 
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const location = useLocation();
  const typeFromPath = location.pathname.split('/')[2];
  const dateFromPath = useParams().currentDate;
  const [date, setDate] = useState(dateFromPath ?? formattedDate);
  const [type, setType] = useState(typeFromPath === '' || typeFromPath === undefined ? ('month') : (typeFromPath));

  return (
    <CalendarContainer>

      <CalendarToolbar date={date} changeDate={setDate} type={type} changeType={setType}/>

      <Navigate to={`/calendar/${type}/${date}`}/>

      <ChoosedDayOrMonthsContainer>
        <Outlet context={[date, setDate]}/>
      </ChoosedDayOrMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
