import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must have @ and be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain a number, an uppercase and lowercase letter, and a special character'
    )
    .required('Password is a required field'),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    .min(3, 'Name must be 3 characters or more')
    .max(16, 'Name must be 16 characters or less')
    .matches(
      /^[\p{L}\s]+$/u,
      'Name must contain only Latin or Cyrillic characters'
    ),
  email: yup
    .string()
    .email('Email must have @ and be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain a number, an uppercase and lowercase letter, and a special character'
    )
    .required('Password is a required field'),
});

export const getPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must have @ and be valid email')
    .required('Email is a required field'),
});
