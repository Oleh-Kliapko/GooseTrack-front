import {
  StyledHeader,
  StyledTitle,
  StyledTitleSpan,
  StyledImg,
} from './Header.styled';

import logoMobile from 'images/others/mobile/goose1x.png';
import logoMobile2x from 'images/others/mobile/goose2x.png';
import logoMobile3x from 'images/others/mobile/goose3x.png';
import logoTablet from 'images/others/tablet/goose1x.png';
import logoTablet2x from 'images/others/tablet/goose2x.png';
import logoTablet3x from 'images/others/tablet/goose3x.png';
import logo from 'images/others/desktop/goose1x.png';
import logo2x from 'images/others/desktop/goose2x.png';
import logo3x from 'images/others/desktop/goose3x.png';

import { AuthNav } from 'components/Main';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledImg>
        <source
          media="(max-width: 767px)"
          srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x, ${logoMobile3x} 3x`}
        />
        <source
          media="(min-width: 768px) and (max-width: 1439px)"
          srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x, ${logoTablet3x} 3x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
        />
        <img src={logoMobile} alt="Logo goose" />
      </StyledImg>
      <StyledTitle>
        G<StyledTitleSpan>oo</StyledTitleSpan>seTrack
      </StyledTitle>
      <AuthNav />
    </StyledHeader>
  );
};
