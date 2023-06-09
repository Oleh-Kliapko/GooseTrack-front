import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.backgroundUserbar};
`;
