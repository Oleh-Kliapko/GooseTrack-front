import styled from '@emotion/styled';

export const TitleColumn = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;

export const ColumnHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
