import styled from '@emotion/styled';
import { Form } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as Icon } from 'images/svg/avatar.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
// import { ReactComponent as Arrow } from "images/svg/arrow-down.svg";

import { themes } from 'styles/themes';
import { device } from 'styles/mediaVeriables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  border-radius: 16px;
  padding: 59px 18px 40px;
  @media ${device.tablet} {
    padding: 40px 175px;
    position: unset;
  }
  @media ${device.desktop} {
    padding: 60px 164px;
  }
`;

export const FormUser = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: auto;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  background: #ffffff;
  @media ${device.tablet} {
    position: relative;
    width: 124px;
    height: 124px;
  }
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const SvgAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.accent};
`;

export const IconUser = styled(Icon)`
  background-color: ${({ theme }) => theme.colors.white};
  fill: rgba(62, 133, 243, 0.18);
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 43px;
  top: 62px;
  @media ${device.tablet} {
    left: 76px;
    top: 106px;
  }
`;

export const AddBtn = styled(Plus)`
  background-color: ${({ theme }) => theme.colors.accent};
  fill: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 14px;
  height: 14px;
  @media ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const UserName = styled.h2`
  margin-top: 85px;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.iconPaginationActive};
  @media ${device.tablet} {
    margin-top: 20px;
    font-size: ${themes.fontSizes.l};
    line-height: 1;
  }
`;

export const User = styled.p`
  margin-top: 4px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  @media ${device.tablet} {
    margin-top: 8px;
    font-size: ${themes.fontSizes.s};
    line-height: 1.3;
  }
`;

export const BlockInput = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
  margin-bottom: 40px;
  width: 100%;
  @media ${device.tablet} {
    grid-gap: 24px;
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

// export const StyledErrorMessage = styled.div `
// font-weight: 400;
//   font-size: 12px;
//   line-height: 1.17;
// color: #DA1414;
// display: flex;
// flex-direction: column;
//position: absolute;
//margin-top: -12px;
//margin-left: auto;
//margin-right: auto;
//padding-left: 18px;
//overflow: hidden;
//color: #DA1414;
//border: 0.15em solid #DA1414; => input
//white-space: nowrap;
//letter-spacing: 0.08em;
//
//@media screen and (min-width: 768px) {
//  margin-top: -16px;
//}
//
//@media screen and (min-width: 1440px) {
//  margin-top: -19px;
//}
// `

// export const ArrowDown = styled(Arrow)`
//  position: absolute;
//  width: 20px;
//  height: 20px;
// top: 50%;
// left: 88%;
// cursor: pointer;
// &:hover {
//   color: ${themes.colors.textCancelBtnIntodo};
// }

// @media ${device.tablet} {
//    width: 25px;
//  height: 25px;
//   top: 50%;
// }
// @media ${device.desktop} {
//    width: 25px;
//  height: 25px;
//   top: 50%;
//   left: 88%;
// }
// `;

export const ChangePasswordBtn = styled.button`
  height: 100%;
  width: auto;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-family: inherit;
  transition: transform 0.2s;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  border-width: 0;
  padding-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    transform: scale(1.5);
  }
`;



