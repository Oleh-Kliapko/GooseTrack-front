import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Icon } from "images/svg/avatar.svg";
import { ReactComponent as Plus } from "images/svg/plus.svg";
import { ReactComponent as Arrow } from "images/svg/arrow-down.svg";
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import { themes } from 'styles/themes';
import { device } from 'styles/mediaVeriables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
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
  top: -16%;
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
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.s};
  line-height: 1.3;
  color: ${themes.colors.black};
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
  color: ${({ theme }) => theme.colors.black};
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
    grid-gap: 50px;
  }
`;


export const InputContainer = styled.li`
position: relative;
  display: flex;
  flex-direction: column;
`;
export const LabelInput = styled.label`

`;
export const TextInput = styled.p`
  color: ${themes.colors.textAndIconTodo};
  margin-bottom: 8px;
  font-weight: ${themes.fontWeight.m};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.2;
  @media ${device.tablet} {
    font-size: ${themes.fontSizes.s};
    line-height: 1.3;
  }
    // @media ${device.desktop} {
  //   margin-bottom: 44px;
  // }

`;

export const Input = styled(Field)`
  box-sizing: border-box;
  padding: 12px 14px;
  color: ${themes.colors.textCancelBtnIntodo};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.3;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;

  border-color: ${({valid, theme}) => {
        switch (valid) {
            case true:
                return theme.colors.saccess;
            case false:
                return theme.colors.failed;
            default:
                return theme.colors.textCancelBtnIntodo
        }
  }};

  :focus {
    border: 1px solid ${({ theme }) => (theme.colors.textCancelBtnIntodo)};
  }

  @media screen and (min-width: ${({ theme }) => (theme.breakpoints.m)}) {
    height: 54px;
    padding: 18px;
    font-size: 16px;
    line-height: 18px;
  }

  @media ${device.tablet} {
    padding: 14px 18px;
    font-size: ${themes.fontSizes.m};
    line-height: 1.2;
  }
    // @media ${device.desktop} {
  //   margin-bottom: 44px;
  // }
  
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

export const DatePickerWrap = styled.div`
  .react-datepicker {
    border-radius: 16px;
    overflow: hidden;
    border: none;
    border-color: ${({ theme }) => (theme.colors.textCancelBtnIntodo)};
    &__header {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
    }
    &__month-container {
      background-color: ${({ theme }) => theme.colors.accent};
    }
    &__day {
      color: ${({ theme }) => theme.colors.white};
      &:hover {
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.ligthBlue};
          color: ${({ theme }) => theme.colors.accent};
          opacity: 0.7;

        }
      &--weekend {
        opacity: 40%;
      }
      &--today {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.accent};

      }
      &--selected {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.ligthBlue};
        color: ${({ theme }) => theme.colors.accent};
        outline: none;
      }
      &--keyboard-selected {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.ligthBlue};
        color: ${({ theme }) => theme.colors.accent};
        outline: none;
      }
    }
    &__day-name {
      color: ${({ theme }) => theme.colors.white};
    }
    &__current-month {
      color: ${({ theme }) => theme.colors.white};
    }
    &__year {

    }
    &__navigation--years {
      background-color: ${({ theme }) => theme.colors.ligthBlue};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px auto;
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        border: 1px solid ${({ theme }) => theme.colors.white};
      }

    }
    &__year-option {
      background-color: ${({ theme }) => theme.colors.accent};
      color: var(--mainWhite);
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        font-size:14px;
        font-weight: 700;
      }
    }
    &__year-dropdown {
      background-color: ${({ theme }) => theme.colors.accent};
      &::-webkit-scrollbar {
        width: 5px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 12px;

  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.ligthBlue};
    border-radius: 12px;

  }
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 12px 14px;
  color: ${themes.colors.textCancelBtnIntodo};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 0.8;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => (theme.colors.textCancelBtnIntodo)};
  border-radius: 8px;

  :focus {
    border: 1px solid ${({ theme }) => (theme.colors.textCancelBtnIntodo)};
  }

  @media screen and (min-width: ${({ theme }) => (theme.breakpoints.m)}) {
    height: 54px;
    padding: 18px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage) `
font-weight: 400;
font-size: 10px;
line-height: 14px;
color: #DA1414;
display: flex;
flex-direction: column;

`

export const Error = styled(BiErrorCircle)`

width: 20px;
    height: 20px;
    margin-right: 12px;
    position: absolute;
    bottom: 30px;
    right: 0;
`


export const Checked = styled(BiCheckCircle)`

width: 20px;
    height: 20px;
    margin-right: 12px;
    position: absolute;
    bottom: 15px;
    right: 0;
`
export const ArrowDown = styled(Arrow)`
 position: absolute;
 width: 20px;
 height: 20px;
top: 50%;
left: 88%;
cursor: pointer;
&:hover {
  color: ${themes.colors.textCancelBtnIntodo};
}

@media ${device.tablet} {
   width: 25px;
 height: 25px;
  top: 50%;
}
@media ${device.desktop} {
   width: 25px;
 height: 25px;
  top: 50%;
  left: 88%;
}
`;





