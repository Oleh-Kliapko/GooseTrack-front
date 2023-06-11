import {
  Wrapper,
  StyledInput,
  StyledLabel,
  StyledIcon,
  InputContainer,
  StyledInputNotification,
  InputWrapper,
  PasswordBtn,
} from './AuthField.styled';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const AuthField = ({
  valid,
  onChange,
  value,
  name,
  type,
  placeholder,
  errorMessage,
  lableName,
}) => {
  const themeColors = useTheme().colors;

  const passwordInputRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleBtn = () => {
    setVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.type = visible ? 'text' : 'password';
    }
  }, [visible]);

  return (
    <Wrapper>
      <InputContainer>
        <StyledLabel htmlFor={name.toLowerCase()} valid={valid}>
          {lableName}
        </StyledLabel>
        <InputWrapper>
          <StyledInput
            id={name.toLowerCase()}
            name={name.toLowerCase()}
            lableName={lableName}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            valid={valid}
            ref={type === 'password' ? passwordInputRef : null}
          />
          {type === 'password' && (
            <PasswordBtn onClick={toggleBtn}>
              {visible ? (
                <AiOutlineEye size={17} />
              ) : (
                <AiOutlineEyeInvisible size={17} />
              )}
            </PasswordBtn>
          )}
        </InputWrapper>
        {valid === false && (
          <StyledIcon>
            <BiErrorCircle color={themeColors.failed} size={20} />
          </StyledIcon>
        )}
        {valid && (
          <StyledIcon>
            <BiCheckCircle color={themeColors.saccess} size={20} />
          </StyledIcon>
        )}
      </InputContainer>
      {valid === false && (
        <StyledInputNotification valid={valid}>
          {errorMessage}
        </StyledInputNotification>
      )}
    </Wrapper>
  );
};

AuthField.propTypes = {
  valid: PropTypes.oneOf([true, false, null]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lableName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
