import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  height: 100vh;
`;
