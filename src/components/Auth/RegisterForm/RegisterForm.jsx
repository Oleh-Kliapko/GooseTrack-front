import { useFormik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledIcon,
} from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { notification, useNotification } from 'helpers';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledHomeBtn } from '../LoginForm/LoginForm.styled';
import { AiOutlineLeftCircle } from 'react-icons/ai';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null);

  const navigate = useNavigate();
  const toast = useNotification();
  const onSubmitForm = async values => {
    try {
      // validation of inputs
      const validationResponse = await validateRegisterForm(values);
      setEmailValid(validationResponse.email.valid);
      setPasswordValid(validationResponse.password.valid);
      setUsernameValid(validationResponse.username.valid);

      const { payload } = await dispatch(register(values));

      if (payload) {
        notification(
          toast,
          'info',
          'Check your email and approve registration'
        );
        navigate('/login');
        formik.resetForm();
      }
      if (payload === 409) {
        notification(
          toast,
          'fail',
          'User with this email already exists. Please log in'
        );
      } else {
        notification(toast, 'fail', 'Enter valid email, password, and name');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <HeadingWrapper>
        <StyledHeading>Sign up</StyledHeading>
        <StyledHomeBtn to="/">
          Home
          <AiOutlineLeftCircle
            style={{
              marginLeft: 6,
            }}
          />
        </StyledHomeBtn>
      </HeadingWrapper>

      <AuthField
        name={'username'}
        lableName={'Name'}
        value={formik.values.username}
        type={'text'}
        onChange={formik.handleChange}
        valid={usernameValid?.valid}
        placeholder="Enter your name"
        errorMessage={usernameValid?.error}
      />

      <AuthField
        name={'Email'}
        lableName={'Email'}
        value={formik.values.email}
        type={'email'}
        onChange={formik.handleChange}
        valid={emailValid?.valid}
        placeholder="Enter email"
        errorMessage={emailValid?.error}
      />

      <AuthField
        name={'Password'}
        lableName={'Password'}
        value={formik.values.password}
        type={'text'}
        onChange={e => {
          formik.handleChange(e);
          setPasswordValid(null);
        }}
        valid={passwordValid?.valid}
        placeholder="Enter password"
        errorMessage={passwordValid?.error}
      />

      <StyledButton type="submit">
        Sign up
        <StyledIcon>
          <FiLogIn size={17} color="#FFFFFF" />
        </StyledIcon>
      </StyledButton>
    </StyledForm>
  );
};
