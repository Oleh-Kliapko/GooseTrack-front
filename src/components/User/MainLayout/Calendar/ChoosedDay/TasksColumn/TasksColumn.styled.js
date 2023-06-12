import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 155px;
  width: 100%;
  padding: 18px 18px 20px;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  border-radius: 8px;
  @media ${device.tablet} {
    padding: 20px;
  }
`;
