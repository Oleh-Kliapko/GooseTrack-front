import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const CalendarTableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

export const Week = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;
