import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding-bottom: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 20px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const GoogleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px;

  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 20px;
  }
`;

export const GoogleText = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    margin-right: 12px;
    background: ${({ theme }) => theme.colors.white};
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-left: 12px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const GoogleLink = styled.a`
  display: flex;
  width: 100%;

  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  border: 1px solid transparent;

  overflow: hidden;
  transition: box-shadow 250ms ${({ theme }) => theme.animations.cubicBezier},
    transform 250ms ${({ theme }) => theme.animations.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.authButton};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const GoogleLinkText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.2px;
`;

export const GoogleLinkImg = styled.span`
  display: block;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.accent};
`;
