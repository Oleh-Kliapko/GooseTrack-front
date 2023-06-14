import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
          t(`notifications.Password is not the same`)
        );
        return;
      } else if (payload === 'Request failed with status code 404') {
        notification(toast, 'fail', t(`notifications.Not found`));
        return;
      }
      return notification(
        toast,
        'success',
        t(`notifications.Password changed`)
      );
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
            <Span>{t(`accountPage.Change password`)}</Span>
            <StyledInput
              name="password1"
              value={values.password1}
              type={'text'}
              onChange={handleChange}
              placeholder={t(`accountPage.Enter your new password`)}
              style={{
                marginBottom: 18,
              }}
            />
            <StyledInput
              name="password2"
              value={values.password2}
              type={'text'}
              onChange={handleChange}
              placeholder={t(`accountPage.Repeat your new password`)}
            />

            <Wrapper>
              <>
                <Button
                  onClick={() => {
                    if (
                      values.password1 !== values.password2 ||
                      values.password1 === '' ||
                      values.password2 === ''
                    ) {
                      return notification(
                        toast,
                        'fail',
                        t(`notifications.Password is not the same`)
                      );
                    }
                    onSubmitForm(values);
                    onCloseModal();
                  }}
                  aria-label="Button add"
                  type="button"
                >
                  {t(`accountPage.Save`)}
                </Button>
                <CancelBtn
                  aria-label="Button cancel"
                  type="button"
                  onClick={() => {
                    onCloseModal();
                  }}
                >
                  {t(`accountPage.Cancel`)}
                </CancelBtn>
              </>
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
