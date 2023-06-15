import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const DateWrapper = styled.ul`
  width: 100%;
  padding: 14px 0px;
  border-radius: 8px;
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${device.tablet} {
    padding: 10px 0px;
    margin-bottom: 16px;
  }
`;

export const WeekInfoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tabletBefore} {
    width: ${({ children }) => {
      switch (children[0].props.id) {
        case 0:
          return '15px';
        case 2:
          return '16px';
        case 4:
          return '8px';
        default:
          return '10px';
      }
    }};
  }
`;

export const DayOfWeek = styled.p`
  overflow: hidden;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 6px;

  color: ${({ id, theme }) => {
    switch (id) {
      case 5:
        return theme.colors.accent;
      case 6:
        return theme.colors.hovered;
      default:
        return theme.colors.loaderWrapper;
    }
  }};

  @media ${device.tablet} {
    font-weight: ${({ theme }) => theme.fontWeight.b};
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.3;
  }

  @media ${device.tabletBefore} {
    overflow: hidden;
    text-align: center;
    width: ${({ name }) => {
      switch (name) {
        case 'ПН':
          return '12px';
        case 'ВТ':
          return '10px';
        case 'СР':
          return '12px';
        case 'ЧТ':
          return '12px';
        case 'ПТ':
          return '13px';
        case 'СБ':
          return '12px';
        case 'НД':
          return '12px';
        case 'MON':
          return '15px';
        case 'TUE':
          return '10px';
        case 'WED':
          return '16px';
        case 'THU':
          return '11px';
        case 'FRI':
          return '10px';
        case 'SAT':
          return '10px';
        case 'SUN':
          return '10px';
        default:
          return 'auto';
      }
    }};
  }
`;

export const DateContainer = styled.button`
  overflow: visible;
  align-self: center;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
  width: 20px;
  height: 22px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background-color: ${({ picked, theme }) =>
    picked ? theme.colors.accent : 'transparent'};
  color: ${({ picked, theme }) =>
    picked ? theme.colors.white : theme.colors.loaderWrapper};
  transition-property: background-color, color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${device.tablet} {
    font-weight: ${({ theme }) => theme.fontWeight.b};
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.1;
    width: 27px;
    height: 26px;
  }
`;
