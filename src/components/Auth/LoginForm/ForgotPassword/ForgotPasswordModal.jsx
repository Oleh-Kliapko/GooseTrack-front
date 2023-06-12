// import React from 'react';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import * as yup from 'yup';
// // import { notification, useNotification } from 'helpers';

// import {
//   ForgotPasswordModalContainer,
//   ForgotHeading,
//   ForgotForm,
//   ForgotEmailInput,
//   ForgotButton,
//   ForgotNotification,
// } from './ForgotPasswordModal.styled';
// import { getNewPassword } from '../../../../redux/auth/operations';
// import CreateModal from '../../../../utils/Modal/Modal';

// const loginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Email must have @ and be a valid email')
//     .required('Email is a required field'),
// });

// const ForgotPasswordModal = ({ show, onClose }) => {
//   const dispatch = useDispatch();

//   const handleSubmit = async values => {
//     try {
//       const validationErrors = await formik.validateForm(); // Виклик функції валідації

//       if (Object.keys(validationErrors).length === 0) {
//         // Перевірка наявності помилок валідації
//         const response = await dispatch(getNewPassword(formik.values.email));

//         if (response.ok) {
//           formik.setFieldValue('notification', 'Please check your email!');
//           formik.setFieldValue('email', '');
//         } else {
//           // Обробити інші випадки
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       notification: '',
//     },
//     validationSchema: loginSchema,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <CreateModal show={show} onClose={onClose}>
//       <ForgotPasswordModalContainer>
//         <ForgotHeading>Confirm your email address</ForgotHeading>
//         <ForgotForm onSubmit={formik.handleSubmit}>
//           <ForgotEmailInput
//             name="email"
//             placeholder="Enter email"
//             value={formik.values.email}
//             type="email"
//             onChange={formik.handleChange}
//           />
//           {formik.errors.email && formik.touched.email && (
//             <div>{formik.errors.email}</div>
//           )}
//           <ForgotButton type="submit">Remind password</ForgotButton>
//         </ForgotForm>
//         {formik.values.notification && (
//           <ForgotNotification>{formik.values.notification}</ForgotNotification>
//         )}
//       </ForgotPasswordModalContainer>
//     </CreateModal>
//   );
// };

// export default ForgotPasswordModal;
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import {
  ForgotPasswordModalContainer,
  ForgotHeading,
  ForgotForm,
  ForgotEmailInput,
  ForgotButton,
  ForgotNotification,
} from './ForgotPasswordModal.styled';
import { getNewPassword } from '../../../../redux/auth/operations';
import CreateModal from '../../../../utils/Modal/Modal';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must have @ and be a valid email')
    .required('Email is a required field'),
});

const ForgotPasswordModal = ({ show, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(getNewPassword(values.email));

      if (payload.ok) {
        resetForm();
        values.notification = 'Please check your email!';
      } else {
        if (payload.status === 404) {
          values.notification = 'User not found. Please check your email';
        } else if (payload.status === 403) {
          values.notification =
            'Email not yet confirmed. Check the confirmation mail';
        } else {
          values.notification = 'Error occurred. Please try again';
        }
      }
    } catch (error) {
      console.error('Error:', error);
      values.notification = 'An error occurred. Please try again';
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        notification: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <CreateModal show={show} onClose={onClose}>
          <ForgotPasswordModalContainer>
            <ForgotHeading>Confirm your email address</ForgotHeading>
            <ForgotForm onSubmit={handleSubmit}>
              <ForgotEmailInput
                name="email"
                placeholder="Enter email"
                value={values.email}
                type="email"
                onChange={handleChange}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <ForgotButton type="submit">Remind password</ForgotButton>
            </ForgotForm>
            {values.notification && (
              <ForgotNotification>{values.notification}</ForgotNotification>
            )}
          </ForgotPasswordModalContainer>
        </CreateModal>
      )}
    </Formik>
  );
};

export default ForgotPasswordModal;
