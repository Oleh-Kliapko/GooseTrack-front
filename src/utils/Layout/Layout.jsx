import { useEffect, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  selectIsLoggedInUser,
  selectIsRefreshingUser,
} from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/reviews/selectors';
import {
  selectIsLoadingTasks,
  selectIsTaskModalOpen,
} from 'redux/tasks/selectors';
import { Loader } from 'utils/Loader';
import { Notification } from 'utils/Notification/Notification';
import { checkIsTodayBusy } from 'helpers/checkIsTodayBusy';
import { useThemeColors } from 'components/User/Header/ThemeToggler/ThemeContext';
import { TaskModal } from 'components/User/MainLayout';

export function Layout() {
  const isAuthLoading = useSelector(selectIsRefreshingUser);
  const isReviewLoading = useSelector(selectIsLoading);
  const isTaskLoading = useSelector(selectIsLoadingTasks);
  const isTaskModalOpen = useSelector(selectIsTaskModalOpen);
  const isLoggedIn = useSelector(selectIsLoggedInUser);
  const firstUpdate = useRef(true);
  const dispatch = useDispatch();
  const theme = useThemeColors().theme;

  const loadingStatusesArray = [isAuthLoading, isReviewLoading, isTaskLoading];
  const isAnythingLoading = loadingStatusesArray.some(
    status => status === true
  );

  useEffect(() => {
    if (isLoggedIn && firstUpdate.current) {
      firstUpdate.current = false;
      checkIsTodayBusy(dispatch);
    }
  }, [dispatch, isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Loader isVisible={isAnythingLoading} />
      <Notification />
      {isTaskModalOpen && <TaskModal />}
    </ThemeProvider>
  );
}
