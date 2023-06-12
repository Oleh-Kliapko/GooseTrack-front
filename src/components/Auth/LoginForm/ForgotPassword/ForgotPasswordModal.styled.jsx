import styled from '@emotion/styled';

export const ForgotPasswordModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-top: 70px;
  }
`;

export const ForgotHeading = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-align: start;
`;

export const ForgotForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

// export const ForgotLabel = styled.label`
//   margin-bottom: 8px;
// `;

export const ForgotEmailInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
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
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  border-radius: 10px;
  border-width: 0;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
`;

export const ForgotNotification = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 8px;
  text-decoration: underline;
`;
