import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  height: calc(100vh - 530px);
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  @media ${device.tablet} {
    height: calc(100vh - 520px);
  }

  @media ${device.desktop} {
    height: calc(100vh - 500px);
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
    background: ${({ theme }) => theme.colors.scrollSwitchVertical};
    border-radius: 12px;
    border-left: 7px solid transparent;
  }
`;
