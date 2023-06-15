import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeftCircle } from 'react-icons/ai';

import {
  StyledForm,
  StyledHeading,
} from './RegisterForm.styled';
import { AuthField } from '../AuthField/AuthField';
import { register } from 'redux/auth/operations';
import { notification, useNotification, validateRegisterForm } from 'helpers';
import { MainBtn } from 'utils/Buttons/MainButton.styled';
import { CgLogIn } from 'react-icons/cg';
import { HeadingWrapper, StyledHomeBtn } from '../LoginForm/LoginForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const toast = useNotification();

  const [nameValid, setNameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const onSubmitForm = async (values, { resetForm }) => {
    try {
      const validationResponse = await validateRegisterForm(
        values,
        t(`validation.Required`),
        t(`validation.Name must be 3 characters or more`),
        t(`validation.Name must be 16 characters or less`),
        t(`validation.Name must contain only Latin or Cyrillic characters`),
        t(`validation.Email must have @ and be valid`),
        t(`validation.Email is a required field`),
        t(`validation.Password must contain`),
        t(`validation.Password is a required field`),
      );

      setNameValid(validationResponse.username);
      setEmailValid(validationResponse.email);
      setPasswordValid(validationResponse.password);

      const checkValidResult = Object.values(validationResponse).every(
        item => item.valid,
      );

      if (checkValidResult) {
        const { payload } = await dispatch(register(values));
        if (payload !== {} || typeof payload !== 'string') {
          notification(toast, 'info', t(`notifications.Approve`));
          navigate('/login');
          resetForm();
        }
        if (typeof payload === 'string') {
          notification(toast, 'fail', t(`notifications.Already exists`));
        }
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
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmitForm}
    >
      {({ values, handleSubmit, handleBlur, handleChange }) => (
        <StyledForm onSubmit={handleSubmit}>
          <HeadingWrapper>
            <StyledHeading>{t(`sign.Sign Up`)}</StyledHeading>
            <StyledHomeBtn to='/'>
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
            valid={nameValid?.valid}
            errorMessage={nameValid?.error}
          />

          <AuthField
            name={'Email'}
            lableName={t(`sign.Email`)}
            value={values.email}
            type={'email'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t(`sign.Enter email`)}
            valid={emailValid?.valid}
            errorMessage={emailValid?.error}
          />

          <AuthField
            name={'Password'}
            lableName={t(`sign.Password`)}
            value={values.password}
            type={'password'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t(`sign.Enter password`)}
            valid={passwordValid?.valid}
            errorMessage={passwordValid?.error}
          />

          <MainBtn style={{ width: '100%', marginTop: '32px' }} type='submit'>
            {t(`sign.Sign Up`)}
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
          </MainBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
