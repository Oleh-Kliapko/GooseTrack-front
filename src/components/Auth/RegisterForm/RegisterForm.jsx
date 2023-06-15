import { Formik, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeftCircle } from 'react-icons/ai';

import {
  StyledErrorMessage,
  StyledForm,
  StyledHeading,
} from './RegisterForm.styled';
import { AuthField } from '../AuthField/AuthField';
import { register } from 'redux/auth/operations';
import { notification, registerSchema, useNotification } from 'helpers';
import { MainBtn } from 'utils/Buttons/MainButton.styled';
import { CgLogIn } from 'react-icons/cg';
import { HeadingWrapper, StyledHomeBtn } from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const toast = useNotification();

  const onSubmitForm = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(register(values));
      if (payload !== {} || typeof payload !== 'string') {
        notification(toast, 'info', t(`notifications.Approve`));
        navigate('/login');
        resetForm();
      }
      if (typeof payload === 'string') {
        notification(toast, 'fail', t(`notifications.Already exists`));
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
      validationSchema={registerSchema(
        t(`validation.Required`),
        t(`validation.Name must be 3 characters or more`),
        t(`validation.Name must be 16 characters or less`),
        t(`validation.Name must contain only Latin or Cyrillic characters`),
        t(`validation.Email must have @ and be valid`),
        t(`validation.Email is a required field`),
        t(`validation.Password must contain`),
        t(`validation.Password is a required field`)
      )}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmitForm}
    >
      {({ values, handleSubmit, handleBlur, handleChange }) => (
        <StyledForm onSubmit={handleSubmit}>
          <HeadingWrapper>
            <StyledHeading>{t(`sign.Sign Up`)}</StyledHeading>
            <StyledHomeBtn to="/">
              {t(`sign.Home`)}
              <AiOutlineLeftCircle
                style={{
                  marginLeft: 6,
                }}
              />
            </StyledHomeBtn>
          </HeadingWrapper>
          <AuthField
            name={'username'}
            lableName={t(`sign.Name`)}
            value={values.username}
            type={'text'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t(`sign.Enter your name`)}
          />
          <ErrorMessage component={StyledErrorMessage} name="username" />

          <AuthField
            name={'Email'}
            lableName={t(`sign.Email`)}
            value={values.email}
            type={'email'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t(`sign.Enter email`)}
          />
          <ErrorMessage component={StyledErrorMessage} name="email" />

          <AuthField
            name={'Password'}
            lableName={t(`sign.Password`)}
            value={values.password}
            type={'password'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t(`sign.Enter password`)}
          />
          <ErrorMessage component={StyledErrorMessage} name="password" />

          <MainBtn style={{ width: '100%', marginTop: '32px' }} type="submit">
            {t(`sign.Sign Up`)}
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
          </MainBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
