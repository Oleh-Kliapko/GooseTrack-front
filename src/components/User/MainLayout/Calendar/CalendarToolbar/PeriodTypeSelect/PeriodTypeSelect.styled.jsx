import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const Item = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.darkBlue : theme.colors.lightBlue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media ${device.tablet} {
    &.day {
      padding: 8px 26px;
    }
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
