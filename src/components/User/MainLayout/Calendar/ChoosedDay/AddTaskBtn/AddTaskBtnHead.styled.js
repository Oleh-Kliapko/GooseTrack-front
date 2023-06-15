import styled from '@emotion/styled';

export const AddTaskBtnStyled = styled.button``;

export const Svg = styled.svg`
  width: 22px;
  height: 22px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};
  transition-property: stroke;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
