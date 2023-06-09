import styled from '@emotion/styled';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  width: 100%;
  height: 468px;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 335px;
    height: 12px;
    display: true;
    background: ${({ theme }) => theme.colors.lineHorizontScrollInTodo};
    border-radius: 12px;
    transform: rotate(-90deg);
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollSwitchHorizont};
    border-radius: 12px;
  }
`;
