import { useFormik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledIcon,
} from './LoginForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateLoginForm } from 'helpers';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';
import { notification, useNotification } from 'helpers';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const toast = useNotification();

  const onSubmitForm = async values => {
    try {
      // Validation of inputs
      const validationResponse = await validateLoginForm(values);
      setEmailValid(validationResponse.email);
      setPasswordValid(validationResponse.password);

      const { payload } = await dispatch(logIn(values));

      console.log('res login ===>', payload);

      if (payload === 'Request failed with status code 400') {
        notification(
          toast,
          'fail',
          'Password or email is incorrect. Please check'
        );
        setPasswordValid(null);
        formik.setFieldValue('password', '');
      } else if (payload === 'Request failed with status code 403') {
        notification(
          toast,
          'fail',
          'Email is not verified yet. Check email box for verification'
        );
        setPasswordValid(null);
        formik.setFieldValue('password', '');
      } else if (payload === 'Request failed with status code 404') {
        notification(toast, 'fail', 'User is not found. Please check email');
        setPasswordValid(null);
        formik.setFieldValue('password', '');
      }
    } catch (err) {
      console.log('Error===>', err);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeading>Log in</StyledHeading>

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
        onChange={formik.handleChange}
        valid={passwordValid?.valid}
        placeholder="Enter password"
        errorMessage={passwordValid?.error}
      />

      <StyledButton type="submit">
        Log in
        <StyledIcon>
          <FiLogIn size={17} color="#FFFFFF" />
        </StyledIcon>
      </StyledButton>
    </StyledForm>
  );
};
