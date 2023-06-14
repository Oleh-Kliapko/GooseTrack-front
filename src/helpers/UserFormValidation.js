import * as yup from 'yup';
import { patterns } from 'helpers/patterns';
const nameSchema = (nameReqValidate, nameLengthValidate) => {
  return yup
    .string()
    .required(nameReqValidate)
    .matches(patterns.namePattern, patterns.namePatternErrorMessage)
    .max(16, nameLengthValidate);
};

const emailSchema = (emailReqValidate, emailValidate) => {
  return yup
    .string()
    .required(emailReqValidate)
    .email(emailValidate)
    .matches(patterns.emailPattern, patterns.emailPatternErrorMessage);
};

const phoneSchema = phoneValidate => {
  return yup.string().matches(/^\+380\d{9}$/, phoneValidate);
};

const skypeSchema = skypeValidate => {
  return yup
    .string()
    .max(16, skypeValidate)
    .matches(patterns.skypePattern, patterns.skypePatternErrorMessage);
};

const birthdaySchema = yup.date();

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

export const validateUserForm = async (
  { name, email, phone, skype, birthday },
  nameReqValidate,
  nameLengthValidate,
  emailReqValidate,
  emailValidate,
  phoneValidate,
  skypeValidate
) => {
  const nameValidation = await validateField(
    name,
    nameSchema(nameReqValidate, nameLengthValidate)
  );
  const emailValidation = await validateField(
    email,
    emailSchema(emailReqValidate, emailValidate)
  );
  const phoneValidation = await validateField(
    phone,
    phoneSchema(phoneValidate)
  );
  const skypeValidation = await validateField(
    skype,
    skypeSchema(skypeValidate)
  );
  const birthdayValidation = await validateField(birthday, birthdaySchema);

  return {
    name: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    skype: skypeValidation,
    birthday: birthdayValidation,
  };
};
