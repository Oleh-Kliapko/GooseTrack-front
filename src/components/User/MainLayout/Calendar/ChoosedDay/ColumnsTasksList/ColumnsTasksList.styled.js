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
  padding: 15px;

  ::-webkit-scrollbar-corner {
    /* background: #f2f2f2; */
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 376px;
    display: true;
    background: transparent;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 12px;
  }
`;
