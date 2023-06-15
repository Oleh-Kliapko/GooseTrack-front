import * as yup from 'yup';

const nameSchema = nameValidate => {
  return yup
    .string()
    .required(nameValidate)
    .min(3, nameValidate)
    .max(16, nameValidate)
    .matches(/^[\p{L}\s]+$/u, nameValidate);
};

const emailSchema = emailValidate => {
  return yup.string().email(emailValidate).required(emailValidate);
};
const passwordSchema = passValidate => {
  return yup
    .string()
    .matches(/^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, passValidate)
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
  emailReqValidate,
  emailValidate,
  passMatches,
  passReq
) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate)
  );
  const passwordValidation = await validateField(
    password,
    passwordSchema(passMatches, passReq)
  );

  return {
    email: emailValidation,
    password: passwordValidation,
  };
};

export const getPasswordSchema = async (
  { email },
  emailReqValidate,
  emailValidate
) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate)
  );

  return {
    email: emailValidation,
  };
};
