import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { CalendarContainer, ChoosedDayOrMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCalendarType, setChoosedDate } from 'redux/tasks/slice';

const CalendarPage = () => {

// logic if redirection is needed
const currentDate = new Date().toISOString().slice(0, 10);
const pathnameBeforeRedirection = "/calendar/";
const currentPathname = useLocation().pathname;
const willRedirect = (currentPathname.length <= pathnameBeforeRedirection.length);

// taking path to store after reloading page with definite date
const typeFromPath = useLocation().pathname.split('/')[2] ?? 'month';
const dateFromPath = useParams().currentDate ?? currentDate;
const dispatch = useDispatch();

useEffect(()=>{
  if (currentPathname.length > pathnameBeforeRedirection.length) {
    dispatch(setCalendarType(typeFromPath))
    dispatch(setChoosedDate(dateFromPath))
  } 
}, []);

  return (
    <CalendarContainer>

      <CalendarToolbar />

      {willRedirect && <Navigate to={`/calendar/month/${currentDate}`}/>}

      <ChoosedDayOrMonthsContainer>
        <Outlet />
      </ChoosedDayOrMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
