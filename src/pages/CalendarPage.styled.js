import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarContainer = styled.div`
  width: 100%;
  padding-inline: 20px;
  padding-top: 16px;
  padding-bottom: 52px;
  background-color: ${({ theme }) => theme.colors.backgroundUserbar};
  @media ${device.tablet} {
    padding-inline: 32px;
    padding-bottom: 42px;
  }
  @media ${device.desktop} {
    padding-inline: 16px;
    padding-bottom: 32px;
  }
`;

export const ChoosedDayOrMonthsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
