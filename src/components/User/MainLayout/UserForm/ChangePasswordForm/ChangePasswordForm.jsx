import { Formik } from 'formik';

import {
  Wrapper,
  Input,
  Label,
  Span,
  StyledForm,
  Button,
  CancelBtn,
} from './ChangePasswordForm.styled';

import { createNewPassword } from '../../../../../redux/auth/operations';

import { useDispatch } from 'react-redux';

import { notification, useNotification } from 'helpers';

export const ChangePasswordForm = ({ values, onCloseModal }) => {
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
          'Password or email is incorrect. Please check'
        );
        return;
      } else if (payload === 'Request failed with status code 403') {
        notification(
          toast,
          'fail',
          'Email is not verified yet. Check email box for verification'
        );
        return;
      } else if (payload === 'Request failed with status code 404') {
        notification(toast, 'fail', 'User is not found. Please check email');
        return;
      }
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
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
              //   onChange={event => setPassword1(event.currentTarget.value)}
              placeholder="Enter your new password"
            />
            <Input
              name="password2"
              value={values.password2}
              type={'text'}
              onChange={handleChange}
              //   onChange={event => setPassword2(event.currentTarget.value)}
              placeholder="Repeat your new password"
            />
            {/* </Label> */}

            <Wrapper>
              <>
                <Button
                  onClick={() => {
                    console.log('close');
                    onSubmitForm(values);
                    // console.log('1', password1);
                    // console.log('initialValues', this.initialValues);
                    // console.log('values', values);

                    // console.log('2', password2);
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
