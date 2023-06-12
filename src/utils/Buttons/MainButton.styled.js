import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from 'styles/mediaVeriables';
import { ReactComponent as IconLightTheme } from 'images/svg/light-theme.svg';
import { ReactComponent as IconDarkTheme } from 'images/svg/dark-theme.svg';
import { FaChevronRight } from 'react-icons/fa';

// !після того як всі ростягнуть свої елементи ListLink треба видалить
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
  width: 320px;
  padding: 0px 20px;
`;

export const AuthLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ colorbtn, theme }) =>
    colorbtn === 'white' ? theme.fontSizes.s : theme.fontSizes.xs};
  line-height: ${props => (props.colorbtn === 'white' ? 1.3 : 1.2)};
  letter-spacing: ${props => props.colorbtn === 'white' && '-0.02em'};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: ${({ colorbtn }) => colorbtn !== 'white' && `underline`};
  text-shadow: ${({ theme }) => theme.shadows.authHeading};
  color: ${({ color, theme }) =>
    color === 'blue' ? theme.colors.accent : theme.colors.white};
  background-color: ${({ colorbtn, theme }) =>
    colorbtn === 'white' ? theme.colors.white : 'transparent'};
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    font-size: ${({ colorbtn, theme }) =>
      colorbtn === 'white' ? theme.fontSizes.s : theme.fontSizes.l};
    line-height: 1.3;
    padding: 14px 22px;
  }
`;

export const MainBtn = styled.button`
  border-radius: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: ${({ padding }) => (padding === '50' ? '14px 50px' : '14px 28px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:disabled {
    color: ${({ theme }) => theme.colors.textCancelBtn};
    background-color: ${({ theme }) => theme.colors.canceled};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tablet} {
    font-size: ${({ padding, theme }) =>
      padding === '50' ? theme.fontSizes.s : theme.fontSizes.l};
    padding: ${({ padding }) => (padding === '50' ? '15px 84px' : '16px 23px')};
  }
`;

export const WrapperSecondBtn = styled.div`
  display: flex;
  gap: 8px;
`;

export const SecondBtn = styled.button`
  border-radius: ${props => (props.radius === '10' ? '10px' : '8px')};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
  padding: ${({ radius }) => (radius === '10' ? `8px 20px` : `12px 0px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ btn, theme }) =>
    btn === 'cancel' ? theme.colors.black : theme.colors.white};

  background-color: ${({ btn, theme }) =>
    btn === 'cancel' ? theme.colors.canceled : theme.colors.accent};

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: ${({ radius }) => (radius === '10' ? `12px 32px` : `15px 0px`)};
    border-radius: ${({ radius }) => radius === '10' && '14px'};
  }
`;

export const CancelBtn = styled.button`
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ btn, theme }) =>
    btn === 'cancel'
      ? theme.colors.textCancelBtn
      : theme.colors.textCancelBtnIntodo};
  border: 1px solid ${({ theme }) => theme.colors.borderInTextArea};

  background-color: ${({ btn, theme }) =>
    btn === 'cancel' ? theme.colors.canceled : theme.colors.canceledInTodo};

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: 15px 0px;
  }
`;

export const PeriodBtn = styled.button`
  width: 36px;
  height: 30px;
  padding: 5px 0px;
  border-top-left-radius: ${({ id }) => (id === 'right' ? 'none' : '8px')};
  border-bottom-left-radius: ${({ id }) => (id === 'right' ? 'none' : '8px')};
  border-top-right-radius: ${({ id }) => (id === 'right' ? '8px' : 'none')};
  border-bottom-right-radius: ${({ id }) => (id === 'right' ? '8px' : 'none')};
  border-right: ${({ id }) => id === 'right' && 'none'};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};

  @media ${device.tablet} {
    width: 38px;
    height: 34px;
    padding: 6px 0px;
  }
`;

export const IconPag = styled(FaChevronRight)`
  fill: ${({ id, theme }) =>
    id === 'left'
      ? theme.colors.borderTableAndInput
      : theme.colors.textCancelBtn};
  &:hover {
    fill: ${({ id, theme }) =>
      id === 'left'
        ? theme.colors.textCancelBtn
        : theme.colors.borderTableAndInput};
  }
  &:active {
    fill: ${({ theme }) => theme.colors.textCancelBtn};
  }

  width: 16px;
  height: 16px;
  rotate: ${({ id }) => id === 'left' && '180deg'};
  @media ${device.tablet} {
    width: 18px;
    height: 18px;
  }
`;

export const ToggleThemeBtn = styled.button`
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  fill: ${({ theme }) => theme.colors.accent};
  &:hover {
    transform: scale(1.1);
  }
`;

export const IconLight = styled(IconLightTheme)`
  width: 24px;
  height: 24px;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;
export const IconDark = styled(IconDarkTheme)`
  width: 24px;
  height: 24px;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;
