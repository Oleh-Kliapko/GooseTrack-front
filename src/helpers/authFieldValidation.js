import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must have @ and be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,60})/,
      'Password must contain a number, an uppercase and lowercase letter, and a special character',
    )
    .required('Password is a required field'),
});

export const registerSchema = yup.object().shape({
  username: yup.string()
    .required('Required')
    .min(3, 'Name must be 3 characters or more')
    .max(16, 'Name must be 16 characters or less')
    .matches(
      /^[\p{L}\s]+$/u,
      'Name must contain only Latin or Cyrillic characters',
    ),
  email: yup
    .string()
    .email('Email must have @ and be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,60})/,
      'Password must contain a number, an uppercase and lowercase letter, and a special character',
    )
    .required('Password is a required field'),
});
