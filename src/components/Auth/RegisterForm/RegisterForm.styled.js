import styled from '@emotion/styled';

// check main font size and line height and delete doubling
// check using font family

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

export const StyledIcon = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  height: 46px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  line-height: 18px;
  letter-spacing: -0.02em;
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  border-radius: 16px;
  border-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 56px;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
  }
`;
