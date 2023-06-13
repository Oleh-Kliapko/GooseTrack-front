import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    padding-inline: 32px;
  }

  @media ${device.desktop} {
    padding-inline: 16px;
  }
`;

export const ChoosedDayOrMonthsContainer = styled.div`
  width: 100%;
`;
