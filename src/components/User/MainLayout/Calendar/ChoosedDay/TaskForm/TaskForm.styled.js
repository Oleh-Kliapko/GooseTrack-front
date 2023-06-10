import styled from "@emotion/styled";

export const StyledForm = styled.form`
  min-width: 246px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme}) => (theme.colors.loaderWrapper)};
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgba(52, 52, 52, 0.8);;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: 'Inter', sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);
`;

export const Input = styled.input`
  height: 42px;
  margin-bottom: 8px;
  padding: 14px;
  width: 100%;
  outline: none;
  background-color: ${({theme}) => (theme.colors.backgroundTextArea)};
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  color: ${({theme}) => (theme.colors.loaderWrapper)};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    height: 46px;
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
  padding-bottom: 20px;
`;

export const RadioButtonLabel = styled.label`
  padding-left: 20px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${({theme}) => (theme.colors.loaderWrapper)};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;

    border-radius: 50%;
    height: 12px;
    width: 12px;

    @media screen and (min-width: 768px) {
      height: 14px;
      width: 14px;
      top: 2px;
      left: -20px;
    }

    
    border: 1.3px solid rgba(114, 194, 248, 0.5);
    ${({ value }) => {
      switch (value) {
        case 'Low':
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
        case 'Medium':
          return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
        case 'High':
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


    @media screen and (min-width: 768px) {
      height: 14px;
      width: 14px;
    }
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
color: ${({theme}) => (theme.colors.textAndIconTodo)};
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
color: ${({theme}) => (theme.colors.white)};
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
