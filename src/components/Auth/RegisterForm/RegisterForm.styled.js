import styled from '@emotion/styled';

export const StyledForm = styled.form`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 469px;
  margin: auto 20px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 480px;
    min-height: 521px;
    padding: 40px;
  }
`;

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.authHeading};
  text-align: start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 24px;
  }
`;

export const StyledInput = styled.div`
  position: static;
`;

export const StyledErrorMessage = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #da1414;
  display: flex;
  flex-direction: column;
`;
