import * as yup from 'yup';

export const loginSchema = (email, emailReq, passReq) => {
  return yup.object().shape({
    email: yup.string().email(email).required(emailReq),
    password: yup.string().required(passReq),
  });
};

export const registerSchema = (
  userReq,
  userMin,
  userMax,
  userMatches,
  email,
  emailReq,
  passMatches,
  passReq
) => {
  return yup.object().shape({
    username: yup
      .string()
      .required(userReq)
      .min(3, userMin)
      .max(16, userMax)
      .matches(/^[\p{L}\s]+$/u, userMatches),
    email: yup.string().email(email).required(emailReq),
    password: yup
      .string()
      .matches(/^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, passMatches)
      .required(passReq),
  });
};

export const getPasswordSchema = (email, emailReq) => {
  return yup.object().shape({
    email: yup.string().email(email).required(emailReq),
  });
};
