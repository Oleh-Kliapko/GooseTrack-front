import styled from '@emotion/styled';
import { themes } from 'styles/themes';
import { device } from 'styles/mediaVeriables';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const LabelInput = styled.label``;
export const TextInput = styled.p`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  margin-bottom: 8px;
  font-weight: ${themes.fontWeight.m};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.2;

  @media ${device.tablet} {
    font-size: ${themes.fontSizes.s};
    line-height: 1.2;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: transparent;
  padding: 12px 14px;
  background: transparent;
  color: ${({ theme }) => theme.colors.iconPaginationActive};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.18;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;

  border-color: ${({ valid, theme }) => {
    switch (valid) {
      case true:
        return theme.colors.saccess;
      case false:
        return theme.colors.failed;
      default:
        return theme.colors.borderUserForm;
    }
  }};

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.textCancelBtnIntodo};
  }

  @media ${device.tablet} {
    padding: 14px 18px;
    font-size: ${themes.fontSizes.m};
    line-height: 1.2;
  }
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  position: absolute;
  bottom: 17px;
  right: 0;
`;

export const StyledInputNotification = styled.p`
  margin: 0;
  padding: 0 18px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ valid, theme }) => {
    switch (valid) {
      case true:
        return theme.colors.saccess;
      case false:
        return theme.colors.failed;
      default:
        return 'transparant';
    }
  }};
`;

export const DatePickWrapper = styled.div`
  .react-datepicker {
    position: absolute;
    top: -10px;
    left: -10px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    border: none;
    width: 327px;
    height: 318px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    line-height: 1.3;

    @media ${device.tablet} {
      width: 373px;
      height: 354px;
      font-size: 22px;
      line-height: 1.3;
    }
    border-color: ${({ theme }) => theme.colors.textCancelBtnIntodo};
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
        background-color: ${({ theme }) => theme.colors.white};
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
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin: 5px auto;
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        border: 1px solid ${({ theme }) => theme.colors.white};
      }
    }
    &__year-option {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        font-size: 14px;
        font-weight: 700;
      }
    }
    &__year-dropdown {
      background-color: ${({ theme }) => theme.colors.accent};
      &::-webkit-scrollbar {
        width: 15px;
        height: 20px;
        background: ${({ theme }) => theme.colors.accent};
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.white};
        border-radius: 8px;
      }
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  background: transparent;
  outline: none;
  /* position: relative; */
  width: 100%;
  padding: 12px 14px;
  color: ${({ theme }) => theme.colors.iconPaginationActive};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 0.8;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ valid, theme }) => {
    switch (valid) {
      case true:
        return theme.colors.saccess;
      case false:
        return theme.colors.failed;
      default:
        return theme.colors.borderUserForm;
    }
  }};

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderUserForm};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 14px 18px;
    font-size: 16px;
    line-height: 1.18;
  }
`;
