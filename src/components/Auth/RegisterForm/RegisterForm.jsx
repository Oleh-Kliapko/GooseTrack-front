import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledButton, StyledForm, StyledHeading, StyledIcon } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { notification, useNotification } from 'helpers';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  toast = useNotification();


  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null);
 // const namePattern = /^[\p{L}\s]+$/u;
  // const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 // const passwordPattern = /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/; // 6

  // const RegisterSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .required('Required')
  //     .min(3, 'Name must be 3 characters or more')
  //     .max(16, 'Name must be 16 characters or less')
  //     .matches(
  //       /^[\p{L}\s]+$/u,
  //       'Name must contain  only Latin or Cyrillic characters, and '
  //     ),
  //   email: Yup.string().required('Required').email('Invalid email'),
  //
  //   password: Yup.string()
  //     .required('Required')
  //     .min(6, 'Password must be 6 characters or more')
  //     .max(60, 'Password must be 60 characters or less')
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,60})/,
  //       'Password must contain a number, an uppercase and lowercase letter, and a special character'
  //     ),
  // });
  const onSubmitForm = async (values) => {
    try {
      // validation of inputs
      const validationResponse = await validateRegisterForm(values);
      setEmailValid(validationResponse.email.valid);
      setPasswordValid(validationResponse.password.valid);
      setUsernameValid(validationResponse.username.valid);

      const {payload} = await dispatch(register(values));
      console.log('payload reg==>', payload);
      if (payload) {
        console.log('ddone log');
        notification(toast, 'info', 'Check your email and approve registration');
       // navigate('/login');
        formik.resetForm();
      }
      if(payload.error ){
        console.log('is err');
      }
      if (payload === 409){
        notification(toast, 'fail', 'User with this email already exists. Please log in');
      }  else {
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
      <StyledHeading>Sign up</StyledHeading>
      <AuthField
        name={'username'}
        lableName={'Name'}
        value={formik.values.username}
        type={'text'}
        onChange={formik.handleChange}
        valid={usernameValid?.valid}
        placeholder='Enter your name'
        errorMessage={usernameValid?.error}
        showError={formik.touched.username && formik.errors.username}
      />

      <AuthField
        name={'Email'}
        lableName={'Email'}
        value={formik.values.email}
        type={'email'}
        onChange={formik.handleChange}
        valid={emailValid?.valid}
        placeholder='Enter email'
        errorMessage={emailValid?.error}
        showError={formik.touched.email && formik.errors.email}
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
        placeholder='Enter password'
        errorMessage={passwordValid?.error}
        showError={formik.touched.password && formik.errors.password}
      />

      <StyledButton type='submit'>
        Sign up
        <StyledIcon><FiLogIn size={17} color='#FFFFFF' /></StyledIcon>
      </StyledButton>

    </StyledForm>
  );
};
