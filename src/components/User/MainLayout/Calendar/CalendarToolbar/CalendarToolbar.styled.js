import styled from 'styled-components';
import { device } from 'styles/mediaVeriables';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;
