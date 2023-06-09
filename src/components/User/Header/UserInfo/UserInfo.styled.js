import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { themes } from 'styles/themes';
import { device } from 'styles/mediaVeriables';

export const StyledName = styled.p`
  margin-right: 14px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${themes.colors.accent};
  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const StyledLetter = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 26px;
  color: ${themes.colors.accent};
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

export const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
