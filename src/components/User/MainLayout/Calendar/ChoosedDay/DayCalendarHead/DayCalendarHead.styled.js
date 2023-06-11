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

  @media ${device.tabletBefore} {
    width: 10px;
    :nth-of-type(1) {
      width: 15px;
    }
    :nth-of-type(3) {
      width: 16px;
    }
    :nth-of-type(5) {
      width: 9px;
    }
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

  &:hover {
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
