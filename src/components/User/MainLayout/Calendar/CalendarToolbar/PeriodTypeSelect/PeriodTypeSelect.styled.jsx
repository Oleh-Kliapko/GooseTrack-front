import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => (props.active ? 'blue' : 'black')};
  text-decoration: none;

  &:hover {
    color: blue;
  }

  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
