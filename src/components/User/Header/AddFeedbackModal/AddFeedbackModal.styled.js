import styled from '@emotion/styled';
import { ReactComponent as CloseBtn } from '../../../../images/svg/x-close.svg';

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
  padding: 28px 20px;
  width: 335px;
  height: 564px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModalTodo};
  border: 1px solid ${({ theme }) => theme.colors.borderModaAddToDo};
  box-shadow: ${({ theme }) => theme.colors.borderInputUserForm} 0px 0px 7px 1px;

  @media screen and (min-width: 768px) {
    width: 468px;
    height: 673px;
    padding: 32px;
  }
`;

export const CloseModalBtn = styled(CloseBtn)`
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  transition: all 250ms;
  z-index: 1300;

  :hover {
    stroke: #3e85f3;
    transform: rotate(180deg);
  }
`;
