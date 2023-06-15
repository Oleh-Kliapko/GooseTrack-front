import * as yup from 'yup';

const nameSchema = (nameReqValidate, nameLengthValidate, userMin, userMax) => {
  return yup
    .string()
    .required(nameReqValidate)
    .min(3, userMin)
    .max(16, userMax)
    .matches(/^[\p{L}\s]+$/u, nameLengthValidate);
};

const emailSchema = (emailReqValidate, emailValidate) => {
  return yup
    .string()
    .email(emailReqValidate)
    .required(emailValidate);

};
const passwordSchema = (passMatches, passReq) => {
  return yup
    .string()
    .matches(/^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, passMatches)
    .required(passReq);
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
  nameReqValidate,
  nameLengthValidate,
  emailReqValidate,
  emailValidate,
  passMatches,
  passReq,
  userMin, userMax,
) => {
  const nameValidation = await validateField(
    username,
    nameSchema(nameReqValidate, nameLengthValidate, userMin, userMax),
  );
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate),
  );
  const passwordValidation = await validateField(
    password,
    passwordSchema(passMatches, passReq),
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
  passReq,
) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate),
  );
  const passwordValidation = await validateField(
    password,
    passwordSchema(passMatches,
      passReq),
  );

  return {
    email: emailValidation,
    password: passwordValidation,
  };
};

export const getPasswordSchema = async (
  { email},
  emailReqValidate,
  emailValidate,
) => {
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate),
  );

  return {
    email: emailValidation,
  };
};
