import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { SideBar } from 'components/User/SideBar';
import { Header } from 'components/User/Header';
import { StyledContainer, StyledMain } from './MainLayout.styled';

import { fetchOwnReviews } from '../../../redux/reviews/operations';
import { fetchTasks } from '../../../redux/tasks/operations';

export const MainLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnReviews());
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <StyledContainer>
      <SideBar />
      <StyledMain>
        <Header />
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
};
