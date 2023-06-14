import * as yup from 'yup';
import i18next from 'i18next';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t('validation.Email must have @ and be valid'))
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      i18next.t('validation.Password must contain')
    )
    .required('Password is a required field'),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    .min(3, i18next.t('validation.Name must be 3 characters or more'))
    .max(16, i18next.t('validation.Name must be 16 characters or less'))
    .matches(
      /^[\p{L}\s]+$/u,
      i18next.t('validation.Name must contain only Latin or Cyrillic characters')
    ),
  email: yup
    .string()
    .email(i18next.t('validation.Email must have @ and be valid'))
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      i18next.t('validation.Password must contain')
    )
    .required('Password is a required field'),
});

export const getPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t('validation.Email must have @ and be valid'))
    .required('Email is a required field'),
});
