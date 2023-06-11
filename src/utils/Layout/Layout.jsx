import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsRefreshingUser } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/reviews/selectors';
import { selectIsLoadingTasks, selectIsTaskModalOpen } from 'redux/tasks/selectors';
import { Loader } from 'utils/Loader/Loader';
import { Notification } from 'utils/Notification/Notification';
import { useThemeColors } from 'components/User/Header/ThemeToggler/ThemeContext';
import { ThemeProvider } from '@emotion/react';
import { TaskModal } from 'components/User/MainLayout';

export function Layout() {
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

  const theme = useThemeColors().theme;

  const isTaskModalOpen = useSelector(selectIsTaskModalOpen);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Loader isVisible={isAnythingLoading} />
      <Notification />
      {isTaskModalOpen && <TaskModal />}
    </ThemeProvider>
  );
}
