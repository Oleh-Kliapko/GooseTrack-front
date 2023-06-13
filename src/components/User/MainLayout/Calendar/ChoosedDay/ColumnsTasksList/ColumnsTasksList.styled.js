import styled from '@emotion/styled';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  height: 100%;
  margin: 0;
  // max-height: 376px;
  overflow-y: scroll;
  overflow-x: hidden;
  // padding: 15px;

  ::-webkit-scrollbar-corner {
    /* background: #f2f2f2; */
  }
  &::-webkit-scrollbar {
    margin-left: 7px;
    width: 8px;
    height: 100%;
    display: true;
    background: ${({ theme }) => theme.colors.lineSwitchVertical};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    margin-left: 7px;
    background: ${({ theme }) => theme.colors.scrollSwitchVertical};
    border-radius: 12px;
    border-left: 7px solid transparent;

  }
`;
