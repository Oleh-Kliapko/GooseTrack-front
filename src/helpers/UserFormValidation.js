import * as yup from 'yup';

export const userSchema = yup.object().shape({
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
  phone: yup
    .string()
    .matches(
      /^38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
      'Phone must bee 38 (0**) *** ** **',
      // /^\+380\d{9}$/,
      // 'Phone must begin +38 and have 10 numbers then',
    ),
  skype: yup.string()
    .max(16, 'Skype must be 16 characters or less'),
  birthday: yup.date(),
});


