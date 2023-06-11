import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import {
  HeadingWrapper,
  StyledForm,
  StyledHeading,
  StyledHomeBtn,
} from './LoginForm.styled';
import { StyledErrorMessage } from '../RegisterForm/RegisterForm.styled';
import { AuthField } from '../AuthField/AuthField';
import { loginSchema } from 'helpers';
import { logIn } from '../../../redux/auth/operations';
import { notification, useNotification } from 'helpers';
import { MainBtn } from '../../../utils/Buttons/MainButton.styled';
import { CgLogIn } from 'react-icons/cg';
import { AiOutlineLeftCircle } from 'react-icons/ai';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const toast = useNotification();

  const onSubmitForm = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(logIn(values));
      if (
        payload === 'Request failed with status code 400' ||
        payload === 'Request failed with status code 401'
      ) {
        notification(
          toast,
          'fail',
          'Password or email is incorrect. Please check'
        );
        return;
      } else if (payload === 'Request failed with status code 403') {
        notification(
          toast,
          'fail',
          'Email is not verified yet. Check email box for verification'
        );
        return;
      } else if (payload === 'Request failed with status code 404') {
        notification(toast, 'fail', 'User is not found. Please check email');
        return;
      }
      resetForm();
    } catch (err) {
      console.log('Error===>', err);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmitForm}
    >
      {({ values, handleSubmit, handleBlur, handleChange }) => (
        <StyledForm onSubmit={handleSubmit}>
          <HeadingWrapper>
            <StyledHeading>Log in</StyledHeading>
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
            type={'text'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter password"
          />
          <ErrorMessage component={StyledErrorMessage} name="password" />

          <MainBtn style={{ width: '100%', marginTop: '32px' }} type="submit">
            Sign up
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
          </MainBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
