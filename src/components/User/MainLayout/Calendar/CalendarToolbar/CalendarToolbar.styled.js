import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarToolbarWrapper = styled.div`
  margin-bottom: 24px;
  padding-top: 40px;
  @media ${device.tablet} {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.desktop} {
    padding-top: 16px;
  }
`;
