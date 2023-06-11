import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// check main font size and line height and delete doubling

export const StyledForm = styled.form`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 346px;
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
    min-height: 424px;
    padding: 40px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 22px;
  }
`;

export const StyledHomeBtn = styled(Link)`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
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
    font-size: 18px;
    line-height: 24px;
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
  font-family: inherit;
  font-size: 14px;
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

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: -32px;
  right: 0;
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
    line-height: 24px;
  }
`;
