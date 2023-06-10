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

import { AuthField } from '../../../../Auth/AuthField/AuthField.jsx';
import { validateLoginForm } from 'helpers';

export const ChangePasswordForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

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
              <Span>CREATE NEW PASSWORD</Span>
              <Input
                name={'New Password'}
                lableName={'New Password'}
                value={values.email}
                type={'text'}
                onChange={handleChange}
                valid={emailValid?.valid}
                placeholder="Enter your new password"
                errorMessage={emailValid?.error}
              />
              <Input
                name={'Repeat New Password'}
                lableName={'New Password'}
                value={values.email}
                type={'text'}
                onChange={handleChange}
                valid={emailValid?.valid}
                placeholder="Repeat your new password"
                errorMessage={emailValid?.error}
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
