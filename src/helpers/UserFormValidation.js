import * as yup from 'yup';
import { patterns } from 'helpers/patterns';

const nameSchema = yup
  .string()
  .required()
  .matches(patterns.namePattern, patterns.emailPatternErrorMessage);

const emailSchema = yup
  .string()
  .required()
  .matches(patterns.emailPattern, patterns.emailPatternErrorMessage);

const phoneSchema = yup
  .string()
  .matches(patterns.phonePattern, patterns.phonePatternErrorMessage);
  
const skypeSchema = yup
    .string()
    .max(16)
    .matches(patterns.skypePattern, patterns.skypePatternErrorMessage);

const birthdaySchema = yup
    .date()
  

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

export const validateUserForm = async ({ username, email, phone, skype, birthday }) => {
  const nameValidation = await validateField(username, nameSchema);
  const emailValidation = await validateField(email, emailSchema);
  const phoneValidation = await validateField(phone, phoneSchema);
  const skypeValidation = await validateField(skype, skypeSchema);
  const birthdayValidation = await validateField(birthday, birthdaySchema);

  return {
    username: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    skype: skypeValidation,
    birthday: birthdayValidation,
  };
};
