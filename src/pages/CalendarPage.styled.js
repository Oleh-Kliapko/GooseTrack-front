import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarContainer = styled.div`
  width: 100%;
  padding-bottom: 52px;
  padding-inline: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  @media ${device.tabletBefore} {
    height: 100vh;
  }
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
`;
