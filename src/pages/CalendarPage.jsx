import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { CalendarContainer, ChoosedDayOrMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChoosedDate } from 'redux/tasks/operations';

const CalendarPage = () => {

  const currentDate = new Date().toISOString().slice(0, 10);
  const location = useLocation();
  const typeFromPath = location.pathname.split('/')[2];
  const dateFromPath = useParams().currentDate;
  const [date, setDate] = useState(dateFromPath ?? currentDate);
  const [type, setType] = useState(typeFromPath === '' || typeFromPath === undefined ? ('month') : (typeFromPath));
  const dispath = useDispatch();
  useEffect(()=>{
    dispath(setChoosedDate(date))
  }, [date, dispath]);
  return (
    <CalendarContainer>

      <CalendarToolbar date={date} changeDate={setDate} type={type} changeType={setType}/>

      <Navigate to={`/calendar/${type}/${date}`}/>

      <ChoosedDayOrMonthsContainer>
        <Outlet context={[date, setDate, setType]}/>
      </ChoosedDayOrMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
