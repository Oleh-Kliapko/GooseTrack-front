import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import { useTheme } from '@emotion/react';
import {
  InputContainer,
  LabelInput,
  TextInput,
  Input,
  StyledIcon,
  StyledInputNotification,
} from './UserField.styled';

export const UserField = ({ valid, onChange, value, name, type, placeholder, errorMessage, lableName  }) => {
  const themeColors = useTheme().colors;

  return (
    <div>
      <InputContainer>
          <LabelInput htmlFor={name.toLowerCase()} valid={valid}></LabelInput>
          <TextInput>{lableName}</TextInput>
        <Input
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          lableName={lableName}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          valid={valid}
          
        />
        {valid === false && <StyledIcon><BiErrorCircle color={themeColors.failed} size={20} /></StyledIcon>}
        {valid && <StyledIcon><BiCheckCircle color={themeColors.saccess} size={20} /></StyledIcon>}
      </InputContainer>
      {valid === false && <StyledInputNotification valid={valid}>{errorMessage}</StyledInputNotification>}
    </div>
  );
};

