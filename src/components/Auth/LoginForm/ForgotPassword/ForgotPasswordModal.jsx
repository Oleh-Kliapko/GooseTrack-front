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
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  ForgotPasswordModalContainer,
  ForgotHeading,
  ForgotForm,
  ForgotButton,
} from './ForgotPasswordModal.styled';
import { StyledInput } from '../../AuthField/AuthField.styled';
import { getNewPassword } from 'redux/auth/operations';
import CreateModal from 'utils/Modal/Modal';
import { notification, useNotification, getPasswordSchema } from 'helpers';

const ForgotPasswordModal = ({ show, onClose }) => {
  const dispatch = useDispatch();

  const toast = useNotification();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(getNewPassword(values.email));

      if (payload.status === 201) {
        notification(
          toast,
          'success',
          'New password was sent to email. Please check'
        );
        values.notification = 'Please check your email';
        resetForm();
      } else {
        notification(toast, 'fail', 'User with this email not found');
      }
    } catch (error) {
      console.error('Error:', error);
      notification(toast, 'fail', 'Something is wrong. Try a later');
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        notification: '',
      }}
      validationSchema={getPasswordSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <CreateModal show={show} onClose={onClose}>
          <ForgotPasswordModalContainer>
            <ForgotHeading>Confirm your email address</ForgotHeading>
            <ForgotForm onSubmit={handleSubmit}>
              <StyledInput
                name="email"
                placeholder="Enter email"
                value={values.email}
                type="email"
                onChange={handleChange}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <ForgotButton type="submit">Remind password</ForgotButton>
            </ForgotForm>
          </ForgotPasswordModalContainer>
        </CreateModal>
      )}
    </Formik>
  );
};

export default ForgotPasswordModal;
