import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { selectUser } from 'redux/auth/selectors';
import { refreshUser, updateUser } from 'redux/auth/operations';
import { validateUserForm } from 'helpers/UserFormValidation';
import { UserField, BirthdayField } from '../UserField/UserField';
import { notification, useNotification } from 'helpers';

import { NewPasswordModal } from './NewPasswordModal/index.js';

import {
  Wrapper,
  User,
  FormUser,
  BlockInput,
  InputFile,
  AddBtn,
  LabelImg,
  ContainerImg,
  ImgAvatar,
  SvgAvatar,
  IconUser,
  UserName,
  ChangePasswordBtn,
} from './UserForm.styled';
import { MainBtn } from '../../../../utils/Buttons/MainButton.styled';

export const UserForm = () => {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [nameValid, setNameValid] = useState(null);
  const [phoneValid, setPhoneValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [birthdayValid, setBirthdayValid] = useState(null);
  const [skypeValid, setSkypeValid] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const [avatarURL, setAvatarURL] = useState(null);
  const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [newBirthday, setNewBirthday] = useState(null);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    birthday: '',
    avatarURL: '',
  });

  const { t } = useTranslation();
  const toast = useNotification();

  useEffect(() => {
    const saveFormData = localStorage.getItem('formData');
    if (saveFormData) {
      setFormData(JSON.parse(saveFormData));
    }
  }, []);

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(refreshUser());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleDatePicker = () => {
    setIsOpenDate(false);
  };

  const onCloseModal = () => setIsShowModal(false);

  return (
    <Wrapper>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: formData.name || user?.username || '',
          email: formData.email || user?.email || '',
          phone: formData.phone || user?.phone || '',
          skype: formData.skype || user?.skype || '',
          birthday:
            newBirthday || formData.birthday || user?.birthday
              ? new Date(newBirthday || formData.birthday || user?.birthday)
              : new Date(),
          avatarURL: formData.avatarURL || user?.avatarURL || '',
        }}
        onSubmit={async values => {
          try {
            const validationResponse = await validateUserForm(values);

            setEmailValid(validationResponse.email);
            setNameValid(validationResponse.name);
            setPhoneValid(validationResponse.phone);
            setSkypeValid(validationResponse.skype);
            setBirthdayValid(validationResponse.birthday);
            const checkValidResult = Object.values(validationResponse).every(
              item => item.valid
            );

            if (checkValidResult) {
              const formData = new FormData();
              formData.append('username', values.name);
              formData.append('email', values.email);
              if (values.phone) {
                formData.append('phone', values.phone);
              }
              if (values.skype) {
                formData.append('skype', values.skype);
              }
              formData.append('birthday', values.birthday);
              if (avatarURL) {
                formData.append('avatarURL', avatarURL);
              }

              dispatch(updateUser(formData));

              notification(
                toast,
                'success',
                'Your profile changed successfully.'
              );
            }
          } catch {
            notification(toast, 'fail', 'Profile change error.');
          }
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          dirty,
          setFieldValue,
        }) => (
          <FormUser autoComplete="off" onSubmit={handleSubmit}>
            <ContainerImg>
              {avatarURL ? (
                <ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
              ) : user?.avatarURL ? (
                <ImgAvatar src={user.avatarURL} alt="avatar" />
              ) : (
                <SvgAvatar>
                  <IconUser />
                </SvgAvatar>
              )}
              <LabelImg htmlFor="avatarURL">
                <AddBtn />
                <InputFile
                  id="avatarURL"
                  type="file"
                  onChange={e => {
                    setFieldValue('avatarURL', e);
                    setAvatarURL(e.target.files[0]);
                  }}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatarURL"
                />
              </LabelImg>
            </ContainerImg>

            <UserName>{user?.username ? user?.username : ''} </UserName>
            <User>{t(`accountPage.User`)}</User>

            <BlockInput>
              <UserField
                name={'Name'}
                lableName={t(`accountPage.Name`)}
                value={values.name}
                type={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={nameValid?.valid}
                placeholder={t(`accountPage.Name`)}
                errorMessage={nameValid?.error}
              />

              <UserField
                name={'Phone'}
                lableName={t(`accountPage.Phone`)}
                value={values.phone}
                type={'tel'}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={phoneValid?.valid}
                placeholder="+38"
                errorMessage={phoneValid?.error}
              />

              <BirthdayField
                name={'Birthday'}
                lableName={t(`accountPage.Birthday`)}
                value={values.birthday}
                type={'date'}
                input={true}
                maxDate={new Date()}
                selected={values.birthday}
                onChange={e => {
                  setFieldValue('birthday', e);
                  setNewBirthday();
                  handleDatePicker();
                }}
                placeholder={t(`accountPage.Birthday`)}
                dateFormat="yyyy/MM/dd"
                open={isOpenDate}
                onClickOutside={() => setIsOpenDate(false)}
                onFocus={() => setIsOpenDate(true)}
                valid={birthdayValid?.valid}
                errorMessage={birthdayValid?.error}
              />

              <UserField
                name={'Skype'}
                lableName={'Skype'}
                value={values.skype}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={skypeValid?.valid}
                placeholder={t(`accountPage.Add a skype number`)}
                errorMessage={skypeValid?.error}
              />

              <UserField
                name={'Email'}
                lableName={t(`accountPage.Email`)}
                value={values.email}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={emailValid?.valid}
                placeholder={t(`accountPage.Email`)}
                errorMessage={emailValid?.error}
              />
            </BlockInput>
            <MainBtn type={'submit'} disabled={!dirty} padding="50">
            {t(`accountPage.Save changes`)}
            </MainBtn>
            <ChangePasswordBtn
              type={'button'}
              onClick={() => {
                setIsShowModal(true);
              }}
              padding="0"
            >
              {t(`accountPage.Change password`)}
            </ChangePasswordBtn>
            {isShowModal && <NewPasswordModal onCloseModal={onCloseModal} />}
          </FormUser>
        )}
      </Formik>
    </Wrapper>
  );
};


