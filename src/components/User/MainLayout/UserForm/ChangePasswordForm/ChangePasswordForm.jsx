import { Formik } from 'formik';

import {
  Wrapper,
  Input,
  Span,
  StyledForm,
  Button,
  CancelBtn,
} from './ChangePasswordForm.styled';

import { createNewPassword } from '../../../../../redux/auth/operations';

import { useDispatch } from 'react-redux';

import { notification, useNotification } from 'helpers';

export const ChangePasswordForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const toast = useNotification();

  const onSubmitForm = async values => {
    console.log('values', values);

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
        'info',
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
            <Span>CHANGE PASSWORD</Span>
            <Input
              name="password1"
              value={values.password1}
              type={'text'}
              onChange={handleChange}
              placeholder="Enter your new password"
            />
            <Input
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
                    console.log('close');
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
                    console.log('close');
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
