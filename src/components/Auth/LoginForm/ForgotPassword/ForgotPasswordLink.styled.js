import styled from '@emotion/styled';

export const ForgotButtonLink = styled.button`
  height: 100%;
  width: auto;

  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  border-width: 0;
  padding-top: 20px;
  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: #2b78ef;
  }
`;
