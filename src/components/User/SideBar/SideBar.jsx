// import { AuthNav } from 'components/Main';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { CgLogIn } from 'react-icons/cg';
import {
  StyledTitle,
  SideBarImg,
  TopWrap,
  SideBarWrap,
  LogoutButton,
  StyledCloseButton,
  StyledLogoWrapper,
} from './SideBar.styled';
import { UserNav } from 'components/User/SideBar/UserNav';
import logoMobile from 'images/others/mobile/goose1x.png';
import logoMobile2x from 'images/others/mobile/goose2x.png';
import logoMobile3x from 'images/others/mobile/goose3x.png';
import logoTablet from 'images/others/tablet/goose1x.png';
import logoTablet2x from 'images/others/tablet/goose2x.png';
import logoTablet3x from 'images/others/tablet/goose3x.png';
import logo from 'images/others/desktop/goose1x.png';
import logo2x from 'images/others/desktop/goose2x.png';
import logo3x from 'images/others/desktop/goose3x.png';
import { ReactComponent as CloseIcon } from 'images/svg/x-close.svg';

export const SideBar = ({ isMobalMenuOpen, closeMobalMenu }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
  };

  return (
    <SideBarWrap className={isMobalMenuOpen && 'openMobalMenu'}>
      <TopWrap>
        <StyledLogoWrapper>
          <SideBarImg>
            <source
              media="(min-width: 375px)"
              srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x, ${logoMobile3x} 3x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x, ${logoTablet3x} 3x`}
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
            />
            <img src={logoMobile} alt="Logo goose" />
          </SideBarImg>
          <StyledTitle>GooseTrack</StyledTitle>
        </StyledLogoWrapper>
        <StyledCloseButton onClick={handleCloseMobalMenu}>
          <CloseIcon />
        </StyledCloseButton>
      </TopWrap>

      <UserNav />
      <LogoutButton type="button" onClick={handleLogOut}>
        Log out
        <CgLogIn style={{ marginLeft: 11, width: 20, height: 20 }} />
      </LogoutButton>
    </SideBarWrap>
  );
};
