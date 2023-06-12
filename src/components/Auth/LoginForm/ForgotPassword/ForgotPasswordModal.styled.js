import styled from '@emotion/styled';

export const ForgotPasswordModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  ${'' /* padding-top: 0px; */}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-top: 30px;
  }
`;

export const ForgotHeading = styled.h2`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-align: start;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const ForgotForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const ForgotButton = styled.button`
  height: 100%;
  width: auto;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  border-radius: 10px;
  border-width: 0;
  padding: 16px 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
`;
