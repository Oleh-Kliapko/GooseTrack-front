import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  display: flex;
  aligh-items: center;
  padding: 40px 32px 32px 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderTitle = styled.h2`
  display: none;

  @media screen and (min-width: 1439px) {
    margin-right: auto;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.textAndIconTodo};
  }
`;

export const MenuBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  fill: #343434;
  stroke: #000;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    cursor: pointer;
  }

  @media screen and (min-width: 1439px) {
    display: none;
  }

  :hover {
    stroke: #3e85f3;
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const BtnAddFeedback = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    margin-left: auto;
    padding: 0;
    border-radius: 14px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(18 / 14);
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    width: 130px;
    height: 42px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;
