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
import { useThemeColors } from 'components/User/Header/ThemeToggler/ThemeContext';
import { ThemeProvider } from '@emotion/react';
import { TaskModal } from 'components/User/MainLayout';
import { useEffect, useRef } from 'react';
import { checkIsTodayBusy } from 'helpers/checkIsTodayBusy';

export function Layout() {
  // *** loader logic ***
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

  // *** theme logic ***
  const theme = useThemeColors().theme;

  // *** task modal logic ***
  const isTaskModalOpen = useSelector(selectIsTaskModalOpen);

  // *** isTodayBusy logic ***
  const firstUpdate = useRef(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedInUser);
  useEffect(() => {
    if (isLoggedIn && firstUpdate.current) {
      firstUpdate.current = false;
      checkIsTodayBusy(dispatch);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Loader isVisible={isAnythingLoading} />
      <Notification />
      {isTaskModalOpen && <TaskModal />}
    </ThemeProvider>
  );
}
