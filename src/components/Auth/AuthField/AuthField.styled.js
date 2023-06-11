import styled from '@emotion/styled';
// check main font size and line height and delete doubling

export const Wrapper = styled.div`
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-top: 24px;
  color: ${({ valid, theme }) => {
    switch (valid) {
      case true:
        return theme.colors.saccess;
      case false:
        return theme.colors.failed;
      default:
        return theme.colors.textCancelBtnIntodo;
    }
  }};
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: start;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 18px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 46px;
  padding: 14px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textCancelBtnIntodo};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid;
  border-color: ${({ valid, theme }) => {
    switch (valid) {
      case true:
        return theme.colors.saccess;
      case false:
        return theme.colors.failed;
      default:
        return theme.colors.borderDefaultColor;
    }
  }};
  border-radius: 8px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.placegolderAuth};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.textCancelBtnIntodo};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 54px;
    padding: 18px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  position: absolute;
  bottom: 13px;
  right: 0;
`;

export const StyledInputNotification = styled.p`
  margin: 0;
  padding: 0 18px;
  font-size: 12px;
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

export const InputWrapper = styled.div`
  position: relative;
`;

export const PasswordBtn = styled.button`
  position: absolute;
  top: 60%;
  right: 10px;
  transform: translateY(-50%);
`;
