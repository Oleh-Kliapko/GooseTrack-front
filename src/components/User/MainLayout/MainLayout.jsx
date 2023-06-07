import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { SideBar } from 'components/User/SideBar';
import { Header } from 'components/User/Header';
import { StyledContainer, StyledMain } from './MainLayout.styled';
import { useState } from 'react';

import { fetchOwnReviews } from '../../../redux/reviews/operations';
import { fetchTasks } from '../../../redux/tasks/operations';

export const MainLayout = () => {
  const dispatch = useDispatch();
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchOwnReviews());
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <StyledContainer>
      <SideBar
        isMobalMenuOpen={isMobalMenuOpen}
        closeMobalMenu={setIsMobalMenuOpen}
      />
      <StyledMain>
        <Header openMobalMenu={setIsMobalMenuOpen} />
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
};
