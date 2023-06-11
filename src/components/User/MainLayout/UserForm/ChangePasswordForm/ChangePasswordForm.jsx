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

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { notification, useNotification } from 'helpers';

export const ChangePasswordForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);

  const toast = useNotification();

  const initialValues = {
    password1: '',
    password2: '',
  };

  return (
    <>
      <Formik initialValues={initialValues}>
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
            <Label htmlFor="title">
              <Span>CHANGE PASSWORD</Span>
              <Input
                name={'New Password'}
                lableName={'New Password'}
                value={values.password1}
                type={'text'}
                onChange={handleChange}
                valid={password1?.valid}
                placeholder="Enter your new password"
                errorMessage={password1?.error}
              />
              <Input
                name={'Repeat New Password'}
                lableName={'New Password'}
                value={values.password2}
                type={'text'}
                onChange={handleChange}
                valid={password2?.valid}
                placeholder="Repeat your new password"
                errorMessage={password2?.error}
              />
            </Label>

            <Wrapper>
              <>
                <Button
                  onClick={() => {
                    console.log('close');
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
