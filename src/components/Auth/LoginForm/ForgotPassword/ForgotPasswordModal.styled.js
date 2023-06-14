import styled from '@emotion/styled';

export const ForgotPasswordModalContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-top: 30px;
  }
`;

export const ForgotHeading = styled.h2`
  margin-bottom: 24px;
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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;
