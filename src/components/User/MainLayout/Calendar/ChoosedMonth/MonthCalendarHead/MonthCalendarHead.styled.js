import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const ListDay = styled.ul`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 14px;
  @media ${device.tablet} {
    margin-bottom: 18px;
  }
  @media ${device.desktop} {
    margin-bottom: 15px;
  }
`;

export const ItemDay = styled.li`
  overflow: hidden;
  text-transform: uppercase;

  @media ${device.tabletBefore} {
    width: 10px;
    :nth-of-type(1) {
      width: 15px;
    }
    :nth-of-type(5) {
      width: 9px;
    }
    :nth-of-type(3) {
      width: 16px;
    }
  }

  @media ${device.tablet} {
    width: 33px;
    :nth-of-type(1) {
      width: 39px;
    }
    :nth-of-type(2) {
      width: 32px;
    }
    :nth-of-type(3) {
      width: 38px;
    }
    :nth-of-type(4) {
      width: 35px;
    }
    :nth-of-type(5) {
      width: 25px;
    }
    :nth-of-type(6) {
      width: 30px;
    }
  }
`;

export const DayBtn = styled.p`
  border: none;
  background-color: transparent;
  /* color: ${({ theme }) => theme.colors.loaderWrapper}; */

  color: ${({ id, theme }) => {
    switch (id) {
      case 'Saturday':
        return theme.colors.accent;
      case 'Sunday':
        return theme.colors.hovered;
      default:
        return theme.colors.loaderWrapper;
    }
  }};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.1;
  padding: 16px 0px;
  @media ${device.tablet} {
    padding: 14px 0px;
  }
`;
