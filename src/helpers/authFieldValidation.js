import * as yup from 'yup';

 export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
});

















import { patterns } from 'helpers/patterns';

const nameSchema = yup
  .string()
  .required()
  .matches(patterns.namePattern, patterns.emailPatternErrorMessage);

const emailSchema = yup
  .string()
  .required()
  .matches(patterns.emailPattern, patterns.emailPatternErrorMessage);

const passwordSchema = yup
  .string()
  .required()
  .matches(patterns.passwordPattern, patterns.passwordPatternErrorMessage);

const validateField = async (value, schema) => {
  let isValid;
  let firstError;
  await schema
    .validate(value)
    .then(() => (isValid = true))
    .catch(error => {
      isValid = false;
      firstError = error.message;
    });
  return { valid: isValid, error: firstError };
};

export const validateRegisterForm = async ({ username, email, password }) => {
  const nameValidation = await validateField(username, nameSchema);
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return {
    username: nameValidation,
    email: emailValidation,
    password: passwordValidation,
  };
};

export const validateLoginForm = async ({ email, password }) => {
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return { email: emailValidation, password: passwordValidation };
};
