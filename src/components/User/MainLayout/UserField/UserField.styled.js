import styled from "@emotion/styled";
import { themes } from 'styles/themes';
import { device } from 'styles/mediaVeriables';

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

export const Input = styled.input`
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
    color: ${({valid, theme}) => {
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