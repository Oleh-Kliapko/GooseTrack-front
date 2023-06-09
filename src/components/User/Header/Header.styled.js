import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px 16px 32px;
  background-color: ${({ theme }) => theme.colors.backgroundUserbar};
`;

export const HeaderTitle = styled.h2`
  display: none;

  @media ${device.desktop} {
    margin-right: auto;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: 1;
    color: ${({ theme }) => theme.colors.textAndIconTodo};
  }
`;

export const MenuBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.loaderWrapper};
  margin-right: auto;
  cursor: pointer;

  @media ${device.tablet} {
    width: 34px;
    height: 34px;
  }

  @media ${device.desktop} {
    display: none;
  }

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const BtnAddFeedback = styled.button`
  display: none;

  @media ${device.tablet} {
    display: block;
    position: relative;
    margin-left: auto;
    padding: 0;
    border-radius: 14px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: calc(18 / 14);
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    width: 130px;
    height: 42px;
    margin-right: 24px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;
