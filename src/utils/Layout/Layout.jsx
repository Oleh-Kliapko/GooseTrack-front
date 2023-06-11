import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsRefreshingUser } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/reviews/selectors';
import { selectChoosedDate, selectIsLoadingTasks, selectIsTaskModalOpen, selectMonthTasks } from 'redux/tasks/selectors';
import { Loader } from 'utils/Loader/Loader';
import { Notification } from 'utils/Notification/Notification';
import { useThemeColors } from 'components/User/Header/ThemeToggler/ThemeContext';
import { ThemeProvider } from '@emotion/react';
import { TaskModal } from 'components/User/MainLayout';
import axios from 'axios';
import { useEffect } from 'react';

export function Layout() {

  // loader logic
  const isAuthLoading = useSelector(selectIsRefreshingUser);
  // const isModalLoading = useSelector(/* modal isLoading selector */);
  const isReviewLoading = useSelector(selectIsLoading);
  const isTaskLoading = useSelector(selectIsLoadingTasks);

  const loadingStatusesArray = [
    isAuthLoading,
    // isModalLoading,
    isReviewLoading,
    isTaskLoading,
  ];

  const isAnythingLoading = loadingStatusesArray.some(
    status => status === true
  );



  // theme logic
  const theme = useThemeColors().theme;



  // task modal logic
  const isTaskModalOpen = useSelector(selectIsTaskModalOpen);


  // isTodayBusy logic
  // const dispatch = useDispatch();
  // const dateFromStore = useSelector(selectChoosedDate);
  // const currentDate = new Date().toISOString().slice(0, 10);
  // const currentMonth = parseInt(currentDate.split("-")[1]);
  // const monthTasks = useSelector(selectMonthTasks);

  // useEffect(()=>{

  //   const monthFromStore = parseInt(dateFromStore.split("-")[1]);
  //   let todayTasks = monthTasks.filter(task => task.date.slice(0,10) === currentDate);;

  //   if (currentMonth !== monthFromStore) {
  //     axios.get(`https://calendar-server-g3h0.onrender.com/api/tasks?month=${currentMonth}`)
  //     .then(response => todayTasks = response.data.filter(task => task.date.slice(0,10) === currentDate))
  //     .catch()
  //   };

  //   console.log(todayTasks);
  // })

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Loader isVisible={isAnythingLoading} />
      <Notification />
      {isTaskModalOpen && <TaskModal />}
    </ThemeProvider>
  );
}
