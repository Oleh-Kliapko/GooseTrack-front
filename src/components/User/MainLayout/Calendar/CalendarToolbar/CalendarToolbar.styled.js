import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarToolbarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundUserbar};

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
