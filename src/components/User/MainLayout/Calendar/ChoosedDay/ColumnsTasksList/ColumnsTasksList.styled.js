import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const Container = styled.div`

`;

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  height: calc(100vh - 530px);
  margin: 0;
  //max-height: 376px;
  overflow-y: scroll;
  overflow-x: hidden;
  // padding: 15px;

  @media ${device.tablet} {
    height: calc(100vh - 520px);
  }

  @media ${device.desktop} {
    height: calc(100vh - 500px);
  }

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
