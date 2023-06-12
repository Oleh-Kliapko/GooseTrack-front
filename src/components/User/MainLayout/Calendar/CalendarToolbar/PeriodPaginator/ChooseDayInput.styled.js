import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const DatePickerButton = styled.button`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.b};
  line-height: 1.3;
  text-transform: uppercase;
  padding: 8px 12px;
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
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.1;
  }
`;
