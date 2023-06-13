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
  cursor: pointer;
  width: 24px;
  border: none;
  background-color: transparent;
  transition: transform 350ms ease;

  :hover {
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    width: 36px;
  }
`;
