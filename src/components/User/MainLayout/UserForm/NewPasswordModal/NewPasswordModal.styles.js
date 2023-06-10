import styled from '@emotion/styled';
import { ReactComponent as CloseBtn } from '../../../../../images/svg/x-close.svg';

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 32px;
  width: 468px;
  height: 673px;
  border-radius: 8px;
  background-color: white;
`;

export const CloseModalBtn = styled(CloseBtn)`
  stroke: #111111;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 18px;
  fill: yellow;
  z-index: 1300;

  :hover {
    stroke: #3e85f3;
  }
`;
