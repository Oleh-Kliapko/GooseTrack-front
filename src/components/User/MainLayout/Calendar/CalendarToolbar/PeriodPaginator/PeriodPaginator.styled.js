import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const WrapperPaginator = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tabletBefore} {
    margin-bottom: 18px;
  }
  @media ${device.tablet} {
    justify-content: start;
    gap: 8px;
  }
`;

export const ChooseDayBtn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tablet} {
    padding: 8px 12px;
  }
`;

export const DateLabel = styled.time`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.b};
  line-height: 1.3;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.1;
  }
`;

export const WrapperPeriodBtn = styled.div``;
