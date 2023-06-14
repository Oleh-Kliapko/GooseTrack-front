import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';


export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.r};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.loaderWrapper};
  background-color: ${({ theme }) => theme.colors.backgroundModalTodo};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.labelInForm};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
`;

export const Input = styled.input`
  margin-bottom: 18px;
  margin-top: 8px;
  padding: 14px 14px;
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.backgroundTextArea};
  border: 1px solid ${({ theme }) => theme.colors.borderInTextArea};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.loaderWrapper};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: 14px;
  line-height: 1.3;
  @media ${device.tablet} {
    padding: 14px 18px;
  }
`;

export const Errors = styled.span`
  position: absolute;
  min-height: 14px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: red;
  font-weight: ${({ theme }) => theme.fontWeight.r};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;

  @media ${device.tablet} {
    margin-bottom: 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 8px;
  margin-bottom: 20px;

`;

export const RadioButtonLabel = styled.label`
  padding-left: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.loaderWrapper};
  cursor: pointer;
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.3;
  }
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;

    border-radius: 50%;
    height: 10px;
    width: 10px;

    @media ${device.tablet} {
      top: 2px;
      left: -20px;
    }

    border: 1.3px solid ${({ theme }) => theme.colors.backgroundModalTodo};
    ${({ value }) => {
      switch (value) {
        case 'low':
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
        case 'низький':
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
        case 'medium':
          return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
        case 'середній':
          return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
        case 'high':
          return 'background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)';
        case 'високий':
          return 'background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)';
        default:
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
          
      }
    }}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    outline: 2px solid;
  }
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  flex-grow: 0.73;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: #efefef;
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
  }
`;

export const Button = styled.button`
  flex-grow: 1;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px var(--btn-shadow-color);
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
  }
`;
