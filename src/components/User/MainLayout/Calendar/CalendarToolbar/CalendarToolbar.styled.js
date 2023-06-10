import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarToolbarWrapper = styled.div`
  margin-bottom: 24px;
  padding-top: 48px;
  @media ${device.tablet} {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
