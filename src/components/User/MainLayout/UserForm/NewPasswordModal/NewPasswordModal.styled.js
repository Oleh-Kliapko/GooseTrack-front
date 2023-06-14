import styled from '@emotion/styled';
import { ReactComponent as CloseBtn } from '../../../../../images/svg/x-close.svg';

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background-color: rgba(0, 0, 0, 0.4);
  // z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding: 40px 28px;
  }
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
