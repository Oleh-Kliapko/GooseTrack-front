import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.accent};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};

  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: ${({ theme }) => theme.fontSizes.logoMobile};
  line-height: 1.09;
  font-weight: ${({ theme }) => theme.fontWeight.r};
  text-shadow: ${({ theme }) => theme.shadows.authHeading};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSizes.logo};
    line-height: 1.25;
  }
`;

export const StyledTitleSpan = styled.span`
  font-family: 'Coolvetica';
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.logoMobile};
  line-height: 1.09;
  font-weight: ${({ theme }) => theme.fontWeight.r};
  text-shadow: ${({ theme }) => theme.shadows.authHeading};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.logo};
    line-height: 1.25;
  }
`;
export const StyledImg = styled.picture`
  width: 142px;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 150px;
  }
`;
