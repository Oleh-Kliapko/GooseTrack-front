import styled from '@emotion/styled';

export const TaskToolbarList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const TaskToolbarItem = styled.ul``;

export const TaskToolbarButton = styled.button`
  position: relative;
  display: flex;
  width: 20px;
  height: 100%;
  padding: 2px;

  color: var(--primary-text-color);
  transition: color var(--animation);

  &:hover {
    color: var(--accent-background-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

export const ToolbarSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: currentColor;
  background-color: transparent;

  &:hover {
    stroke: currentColor;
  }
`;
