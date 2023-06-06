import { Outlet } from 'react-router-dom';
import { SideBar } from 'components/User/SideBar';
import { Header } from 'components/User/Header';
import { StyledContainer, StyledMain } from './MainLayout.styled';

export const MainLayout = () => {
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
