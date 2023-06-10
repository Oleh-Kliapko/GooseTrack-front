import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const DateWrapper = styled.ul`
  width: 100%;
  padding: 14px 40px;
  border-radius: 8px;
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeekInfoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DayOfWeek = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.1;
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
  margin: 0px 0px 6px 0px;
  overflow: hidden;
  text-transform: uppercase;

  @media ${device.tabletBefore} {
    width: 10px;
    /* :nth-of-type(1) {
      width: 15px;
    }
    :nth-of-type(2) {
      width: 12px;
    }
    :nth-of-type(3) {
      width: 16px;
    }
    :nth-of-type(5) {
      width: 9px;
    } */
  }
`;

export const DateContainer = styled.button`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
  width: 27px;
  border-radius: 8px;
  background-color: ${({ picked, theme }) =>
    picked ? theme.colors.accent : 'transparent'};
  color: ${({ picked, theme }) =>
    picked ? theme.colors.white : theme.colors.loaderWrapper};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;
