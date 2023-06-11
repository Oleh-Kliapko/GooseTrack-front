import styled from '@emotion/styled';
import { ReactComponent as Close } from 'images/svg/x-close.svg';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.borderDefaultColor};
  border-radius: 8px;
  max-width: 100%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding: 40px 28px;
  }
`;

export const CloseModal = styled(Close)`
  position: absolute;
  top: 19px;
  right: 19px;
  transition: all 250ms;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.accent};
  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.hovered};
  }
`;
