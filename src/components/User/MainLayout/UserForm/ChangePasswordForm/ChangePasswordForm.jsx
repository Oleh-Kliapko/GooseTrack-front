import { Formik } from 'formik';

import {
  Wrapper,
  Span,
  StyledForm,
  Button,
  CancelBtn,
} from './ChangePasswordForm.styled';
import { StyledInput } from '../../../../Auth/AuthField/AuthField.styled';

import { createNewPassword } from '../../../../../redux/auth/operations';

import { useDispatch } from 'react-redux';

import { notification, useNotification } from 'helpers';

export const ChangePasswordForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const toast = useNotification();

  const onSubmitForm = async values => {
    try {
      const { payload } = await dispatch(createNewPassword(values));
      if (
        payload === 'Request failed with status code 400' ||
        payload === 'Request failed with status code 401'
      ) {
        notification(
          toast,
          'fail',
          'Password is not the same, please re-enter'
        );
        return;
      } else if (payload === 'Request failed with status code 404') {
        notification(toast, 'fail', 'User is not found. Please check email');
        return;
      }
      return notification(
        toast,
        'success',
        'Password has been successfully changed and sent to user email'
      );
      //   resetForm();
    } catch (err) {
      console.log('Error===>', err);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          password1: '',
          password2: '',
        }}
      >
        {({ values, handleChange }) => (
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Span>Change password</Span>
            <StyledInput
              name="password1"
              value={values.password1}
              type={'text'}
              onChange={handleChange}
              placeholder="Enter your new password"
              style={{
                marginBottom: 18,
              }}
            />
            <StyledInput
              name="password2"
              value={values.password2}
              type={'text'}
              onChange={handleChange}
              placeholder="Repeat your new password"
            />

            <Wrapper>
              <>
                <Button
                  onClick={() => {
                    onSubmitForm(values);
                    onCloseModal();
                  }}
                  aria-label="Button add"
                  type="submit"
                >
                  Save
                </Button>
                <CancelBtn
                  aria-label="Button cancel"
                  type="button"
                  onClick={() => {
                    onCloseModal();
                  }}
                >
                  Cancel
                </CancelBtn>
              </>
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
