import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { parseISO } from 'date-fns';
import {selectUser } from 'redux/auth/selectors';
import {  refreshUser, updateUser } from 'redux/auth/operations';
import { patterns } from 'helpers';


import {
  Wrapper,
  User,
  FormUser,
  BlockInput,
  LabelInput,
  Input,
  StyledDatePicker,
  InputFile,
  AddBtn,
  LabelImg,
  ContainerImg,
  ImgAvatar,
  SvgAvatar,
  DatePickerWrap,
  IconUser,
  InputContainer, UserName, TextInput, StyledErrorMessage,
  
} from './UserForm.styled';
import { MainBtn } from '../../../../utils/Buttons/MainButton.styled';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(patterns.namePattern, 'Name should contain only letters')
    .min(2, 'Must be at least 2 characters long!')
    .max(16, 'Must be up to 16 characters long!')
    .required('Name is required field'),

  // birthday: Yup.date().nullable(),
  email: Yup.string()
    .email('Invalid email format')
    .matches(patterns.emailPattern)
    .required('Email is required'),

  phone: Yup.string()
    .matches(patterns.phonePattern, 'Enter your phone number in format 38 (011) 111 11 11'),
  skype: Yup.string().max(16),

});


export const UserForm = () => {
  const { user }= useSelector(selectUser);
  const dispatch = useDispatch();

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [newBirthday, setNewBirthday] = useState(null);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    birthday: '',
  });

  //============================

  console.log(user);

  // const birthDay = moment(birthday).format('YYYY/MM/DD');
// let birthday = null;
//   if(userInfo.birthday){
//     birthday = parseISO(userInfo.birthday)
//   }

//   console.log('birthDay ===>', birthday);
  //=============================

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
        //  birthday || newBirthday || formData.birthday
        //       ? new Date(birthday || newBirthday || formData.birthday)
        //       : new Date(),
          newBirthday || formData.birthday || user?.birthday
              ? new Date(newBirthday || formData.birthday || user?.birthday)
              : new Date(),

        }}
        onSubmit={async values => {
          const updatedUserData = {
            username: values.name,
            email: values.email,
            phone: values.phone,
            skype: values.skype,
            birthday: values.birthday,
            avatarURL: avatarUrl,
          };
          await dispatch(updateUser(updatedUserData));
        }}

        // onSubmit={async values => {
        //   const formData = new FormData();
        //   formData.append('username', values.name);
        //   formData.append('email', values.email);
        //   if (values.phone) {
        //     formData.append('phone', values.phone);
        //   }
        //   if (values.skype) {
        //     formData.append('skype', values.skype);
        //   }
        //   formData.append('birthday', values.birthday);
        //   if (avatarUrl) {
        //     formData.append('avatarURL', avatarUrl);
        //   }
        //   await dispatch(updateUser(formData));
        // }}
        validationSchema={userSchema}
      >
        {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
          <FormUser autoComplete="off" onSubmit={handleSubmit}>

            <ContainerImg>
              {avatarUrl ? (
                <ImgAvatar src={avatarUrl} alt="avatar" />
              ) : user?.avatarUrl ? (
                <ImgAvatar src={user.avatarURL.split('blob:')[1]} alt="avatar" />
              ) : (
                <SvgAvatar>
                  <IconUser/>
                </SvgAvatar>
              )}
              <LabelImg htmlFor="avatarUrl">
                <AddBtn />
                <InputFile
                  id="avatarUrl"
                  type="file"
                  onChange={event => {
                    const file = event.target.files[0];
                    setAvatarUrl(URL.createObjectURL(file));
                  }}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatarURL"
                />
              </LabelImg>
            </ContainerImg>


            <UserName>{user?.username? user?.username : ''} </UserName>
            <User>User</User>
            <BlockInput>
              <InputContainer>
                <LabelInput htmlFor="name" >
                  <TextInput>User Name</TextInput>
                </LabelInput>

                <Input
                  type="text"
                  name="name"
                  id="name"
                  // value={userInfo?.username? userInfo.username : values.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                }>
                  <StyledErrorMessage name="name"  />
                </div>
              </InputContainer>

              <InputContainer>
                <LabelInput htmlFor="phone">
                  <TextInput>Phone</TextInput>
                </LabelInput>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  // value={userInfo?.phone? userInfo.phone : values.phone}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="38 (000) 000 00 00"
                />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                }>
                  <StyledErrorMessage name="phone" />
                </div>

              </InputContainer>

              <InputContainer>
                <LabelInput htmlFor="birthday">
                  <TextInput>Birthday</TextInput>
                </LabelInput>
                <DatePickerWrap>
                  <StyledDatePicker
                    type="date"
                    name="birthday"
                    id="birthday"
                    input={true}
                    maxDate={new Date()}
                    selected={values.birthday}
                    // selected={userInfo?.birthday !==null ? birthday : values.birthday}
                    onChange={data => {
                      setNewBirthday(data);
                      handleDatePicker();
                    }}
                    placeholder="Birthday"
                    dateFormat="yyyy/MM/dd"
                    open={isOpenDate}
                    onClickOutside={() => setIsOpenDate(false)}
                    onFocus={() => setIsOpenDate(true)}
                    showYearDropdown
                    scrollableYearDropdown
                  />

                  <StyledErrorMessage name="birthday" />

                </DatePickerWrap>
              </InputContainer>

              <InputContainer>
                <LabelInput htmlFor="skype">
                  <TextInput>Skype</TextInput>
                </LabelInput>
                <Input
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Add a skype number"
                  // value={userInfo?.skype ? userInfo.skype : values.skype}
                  value={values.skype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                }>
                  <StyledErrorMessage name="skype" />
                </div>
              </InputContainer>

              <InputContainer>
                <LabelInput htmlFor="email">
                  <TextInput>Email</TextInput>
                </LabelInput>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  // value={userInfo?.email ? userInfo.email: values.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                }>
                  <StyledErrorMessage name="email" />
                </div>
              </InputContainer>

            </BlockInput>
            <MainBtn type={'submit'}  padding="50">Save changes</MainBtn>
          </FormUser>
        )}
      </Formik>
    </Wrapper>
  );
};


