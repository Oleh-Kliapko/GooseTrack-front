import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TitleColumn = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  @media ${device.tabletBefore} {
    width: calc(100vw - 100px);
    text-align: center;
  }
`;

export const ColumnHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
