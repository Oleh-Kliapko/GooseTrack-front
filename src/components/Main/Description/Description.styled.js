import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const Item = styled.li``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const DescriptionWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-left: 77px;
  }
`;

export const Sidebar = styled.div`
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    order: 1;
    margin-right: 77px;
  }
`;

export const Number = styled.p`
  margin-bottom: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${({ theme }) => theme.colors.accent};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.number};
  }
`;

export const Title = styled.p`
  display: inline-block;
  padding: 8px 18px;
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  line-height: 40px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.backgroundAuth};
  border-radius: 44px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 6px 18px;
    font-size: ${({ theme }) => theme.fontSizes.titleMain};
    line-height: 44px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  line-height: 40px;
  text-transform: uppercase;
  color: #171820;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSizes.titleMain};
    line-height: 44px;

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const ContentDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px;

  color: rgba(17, 17, 17, 0.9);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 275px;
  }
`;

export const Img = styled.picture`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
    & img {
      width: 100%;
      max-width: 900px;
    }
  }
`;

export const ImgLeft = styled.picture`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
    & img {
      margin-left: auto;
      width: 100%;
      max-width: 900px;
    }
  }
`;
