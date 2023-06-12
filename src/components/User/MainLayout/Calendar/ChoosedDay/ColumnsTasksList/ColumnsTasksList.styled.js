import styled from '@emotion/styled';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 315px;
  //height: 468px;
  height: 100%;
  margin-left: 21px;
  max-height: 376px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar-corner {
    /* background: #f2f2f2; */
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 376px;
    display: true;
    background: ${({ theme }) => theme.colors.lineSwitchVertical};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollSwitchVertical};
    border-radius: 12px;
  }
`;
