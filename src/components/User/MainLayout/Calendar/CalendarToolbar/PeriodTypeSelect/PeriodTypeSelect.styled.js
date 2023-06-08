import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

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

export const MonthDayBtn = styled.button`
  width: 76px;
  padding: 8px 0px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.2;
  border-top-left-radius: ${props => (props.swith === 'day' ? 'none' : '8px')};
  border-bottom-left-radius: ${props =>
    props.swith === 'day' ? 'none' : '8px'};
  border-top-right-radius: ${props => (props.swith === 'day' ? '8px' : 'none')};
  border-bottom-right-radius: ${props =>
    props.swith === 'day' ? '8px' : 'none'};
  border-right: ${props =>
    props.swith === 'day'
      ? 'none'
      : `1px solid ${({ theme }) => theme.colors.accentText}`};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.darkBlue : theme.colors.ligthBlue};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.textMonthDayBtn : theme.colors.accent};
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    width: 82px;
  }
`;
