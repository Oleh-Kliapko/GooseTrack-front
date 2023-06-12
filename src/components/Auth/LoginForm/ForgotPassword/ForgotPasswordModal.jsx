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
          'New password was sent to email. Please check',
          onClose()
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
        <CreateModal
          show={show}
          onClose={onClose}
          style={{ width: '480px', height: '424px' }}
        >
          <ForgotPasswordModalContainer>
            <ForgotHeading>Confirm your email address</ForgotHeading>
            <ForgotForm onSubmit={handleSubmit}>
              <StyledInput
                style={{ marginTop: '0px', marginBottom: '40px' }}
                name="email"
                placeholder="Enter email"
                value={values.email}
                type="email"
                onChange={handleChange}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <ForgotButton style={{ width: '100%' }} type="submit">
                Remind password
              </ForgotButton>
            </ForgotForm>
          </ForgotPasswordModalContainer>
        </CreateModal>
      )}
    </Formik>
  );
};

export default ForgotPasswordModal;
