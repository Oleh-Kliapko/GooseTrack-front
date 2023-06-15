import * as yup from 'yup';
import { patterns } from './patterns';

const nameSchema = nameValidate => {
  return yup
    .string()
    .required(nameValidate)
    .min(3, nameValidate)
    .max(16, nameValidate)
    .matches(patterns.namePattern, nameValidate);
};

const emailSchema = emailValidate => {
  return yup
    .string()
    .matches(patterns.emailPattern, emailValidate)
    .required(emailValidate);
};

const passwordSchema = passValidate => {
  return yup
    .string()
    .matches(patterns.passwordPattern, passValidate)
    .required(passValidate);
};

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

export const validateRegisterForm = async (
  { username, email, password },
  nameValidate,
  emailValidate,
  passValidate
) => {
  const nameValidation = await validateField(
    username,
    nameSchema(nameValidate)
  );
  const emailValidation = await validateField(
    email,
    emailSchema(emailValidate)
  );
  const passwordValidation = await validateField(
    password,
    passwordSchema(passValidate)
  );

  return {
    username: nameValidation,
    email: emailValidation,
    password: passwordValidation,
  };
};

export const validateLoginForm = async (
  { email, password },
  emailValidate,
  passValidate
) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailValidate)
  );
  const passwordValidation = await validateField(
    password,
    passwordSchema(passValidate)
  );

  return {
    email: emailValidation,
    password: passwordValidation,
  };
};

export const getPasswordSchema = async ({ email }, emailValidate) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailValidate)
  );

  return {
    email: emailValidation,
  };
};
