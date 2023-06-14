import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

//
export const AddTask = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 1px dashed ${({ theme }) => theme.colors.borderBtnAddTask};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background-color: ${({ theme }) => theme.colors.backColorBtnAddTask};
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
    color: ${({ theme }) => theme.colors.backgroundModalTodo};
    Svg {
      stroke: ${({ theme }) => theme.colors.backgroundModalTodo};
    }
  }

  @media ${device.tablet} {
    padding: 14px 0px;
  }
`;
