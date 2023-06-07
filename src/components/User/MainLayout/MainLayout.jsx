import { Outlet } from 'react-router-dom';
import { SideBar } from 'components/User/SideBar';
import { Header } from 'components/User/Header';
import { StyledContainer, StyledMain } from './MainLayout.styled';
import { useState } from 'react';

export const MainLayout = () => {
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);
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
