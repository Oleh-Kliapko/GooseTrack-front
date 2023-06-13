import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const StyledTogglerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding-top: 4px;

  @media ${device.tablet} {
    margin-right: 14px;
    padding-top: 0px;
  }
`;

export const StyledFlagButton = styled.button`
  position: relative;
  cursor: pointer;

  background-color: transparent;
  transition: transform 350ms ease;

  :hover {
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    width: 36px;
  }
`;

export const StyledLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 6px;
  border-radius: 50%;
  background-color: white;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;
