import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CalendarContainer, ChoosedDayOrMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarType, setChoosedDate } from 'redux/tasks/slice';
import { selectChoosedDate } from 'redux/tasks/selectors';
import { fetchMonthTasks } from 'redux/tasks/operations';

const CalendarPage = () => {

// logic if redirection is needed
const currentDate = new Date().toISOString().slice(0, 10);
const pathnameBeforeRedirection = "/calendar/";
const currentPathname = useLocation().pathname;
const willRedirect = (currentPathname.length <= pathnameBeforeRedirection.length);

// taking path to store after reloading page with definite date
const typeFromPath = useLocation().pathname.split('/')[2] ?? 'month';
const dateFromPath = useLocation().pathname.split('/')[3] ?? currentDate;
const dispatch = useDispatch();

useEffect(()=>{
  if (currentPathname.length > pathnameBeforeRedirection.length) {
    dispatch(setCalendarType(typeFromPath))
    dispatch(setChoosedDate(dateFromPath))
  } 
}, [currentPathname.length, dateFromPath, dispatch, typeFromPath]);

  // get tasks when month is changed
  const date = useSelector(selectChoosedDate);
  const choosedMonth = parseInt(date.split("-")[1]);
  useEffect(()=>{
    console.log('get month tasks');
    dispatch(fetchMonthTasks(choosedMonth))
  }, [choosedMonth, dispatch])

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
