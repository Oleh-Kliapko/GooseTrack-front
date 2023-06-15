import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  ForgotPasswordModalContainer,
  ForgotHeading,
  ForgotForm,
} from './ForgotPasswordModal.styled';
import { StyledInput } from '../../AuthField/AuthField.styled';
import { getNewPassword } from 'redux/auth/operations';
import CreateModal from 'utils/Modal/Modal';
import { getPasswordSchema, notification, useNotification } from 'helpers';
import { selectIsRefreshingUser } from 'redux/auth/selectors';
import { LoaderMini } from 'utils/Loader';
import { MainBtn } from 'utils/Buttons/MainButton.styled';

const ForgotPasswordModal = ({ show, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshingUser);

  const toast = useNotification();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { payload } = await dispatch(getNewPassword(values.email));

      if (payload.status === 201) {
        notification(
          toast,
          'success',
          t(`notifications.New password`),
          onClose()
        );
        values.notification = 'Please check your email';
        resetForm();
      } else {
        notification(toast, 'fail', t(`notifications.Not found`));
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
      validationSchema={getPasswordSchema(
        t(`validation.Email must have @ and be valid`),
        t(`validation.Email is a required field`)
      )}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <CreateModal
          background="#FFFFFF"
          color="#111111"
          show={show}
          onClose={onClose}
          style={{ width: '480px', height: '424px' }}
        >
          <ForgotPasswordModalContainer>
            <ForgotHeading>
              {t(`sign.Confirm your email address`)}
            </ForgotHeading>
            {isRefreshing && <LoaderMini />}
            {!isRefreshing && (
              <ForgotForm onSubmit={handleSubmit}>
                <StyledInput
                  name="email"
                  placeholder={t(`sign.Enter email`)}
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <MainBtn style={{ width: '70%', marginTop: 40 }}>
                  {t(`sign.Remind password`)}
                </MainBtn>
              </ForgotForm>
            )}
          </ForgotPasswordModalContainer>
        </CreateModal>
      )}
    </Formik>
  );
};

export default ForgotPasswordModal;
