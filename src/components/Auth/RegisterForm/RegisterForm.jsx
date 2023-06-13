import { Formik, ErrorMessage } from 'formik';
import {
  StyledErrorMessage,
  StyledForm,
  StyledHeading,
} from './RegisterForm.styled';
import { AuthField } from '../AuthField/AuthField';
import { registerSchema } from 'helpers/authFieldValidation';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { notification, useNotification } from 'helpers';
import { useNavigate } from 'react-router-dom';
import { MainBtn } from '../../../utils/Buttons/MainButton.styled';
import { CgLogIn } from 'react-icons/cg';
import { HeadingWrapper, StyledHomeBtn } from '../LoginForm/LoginForm.styled';
import { AiOutlineLeftCircle } from 'react-icons/ai';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useNotification();

  const onSubmitForm = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(register(values));
      if (payload !== {} || typeof payload !== 'string') {
        notification(
          toast,
          'info',
          'Check your email and approve registration'
        );
        navigate('/login');
        resetForm();
      }
      if (typeof payload === 'string') {
        notification(
          toast,
          'fail',
          'User with this email already exists. Please log in'
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmitForm}
    >
      {({ values, handleSubmit, handleBlur, handleChange }) => (

        <StyledForm onSubmit={handleSubmit}>
          <HeadingWrapper>
            <StyledHeading>Sign Up</StyledHeading>
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
            value={values.username}
            type={'text'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
          />
          <ErrorMessage component={StyledErrorMessage} name="username" />

          <AuthField
            name={'Email'}
            lableName={'Email'}
            value={values.email}
            type={'email'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter email"
          />
          <ErrorMessage component={StyledErrorMessage} name="email" />

          <AuthField
            name={'Password'}
            lableName={'Password'}
            value={values.password}
            type={'password'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter password"
          />
          <ErrorMessage component={StyledErrorMessage} name="password" />

          <MainBtn style={{ width: '100%', marginTop: '32px' }} type="submit">
            Sign Up
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
          </MainBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
