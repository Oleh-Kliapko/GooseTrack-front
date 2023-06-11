import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { userSchema } from 'helpers/UserFormValidation';
import { UserField, BirthdayField } from '../UserField/UserField';
import { notification, useNotification } from 'helpers';

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
  // ArrowDown,
  UserName,
  StyledErrorMessage,
} from './UserForm.styled';
import { MainBtn } from '../../../../utils/Buttons/MainButton.styled';

export const UserForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(selectUser);
  const toast = useNotification();

  const [isOpenDate, setIsOpenDate] = useState(false);
  const [userName, setUserName] = useState('');
  const [newAvatarURL, setNewAvatarURL] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
    avatarURL: '',
  });

  useEffect(() => {
    const { username, phone, birthday, skype, email } = user;

    setAvatarURL(user.avatarURL || '');
    setUserName(user.username);
    const initialValues = {
      username: username || '',
      phone: phone || '',
      birthday:
        birthday
          ? new Date(birthday)
          : new Date(),
      skype: skype || '',
      email: email || '',
      avatarURL: user.avatarURL || '',
    };
    setFormData(initialValues);
  }, [user]);

  const handleDatePicker = () => {
    setIsOpenDate(false);
  };

  // console.log('user FORM===>', user);
  // console.log('user avatarURL===>', avatarURL);
  // console.log('user NEWavatarURL===>', newAvatarURL);
  // console.log('formData===>', formData);

  return (
    <Wrapper>

      <Formik
        enableReinitialize={true}
        initialValues={formData}
        validationSchema={userSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          // console.log('values SUBMIT=>', values);
          // console.log('avatar NEW ==>', avatarURL,cleanStringify(avatarURL));
          try {
            const formData = new FormData();
            formData.append('username', values.username);
            formData.append('phone', values.phone);
            formData.append('birthday', values.birthday);
            formData.append('skype', values.skype);
            formData.append('email', values.email);

            console.log('newAvatarURL  add===>', newAvatarURL);


            if (newAvatarURL) {
              console.log('newAvatarURL');
              formData.append('avatarURL', newAvatarURL);
            } else {
              console.log('no avatar add');
              console.log('avatarURL ====>', avatarURL );
              console.log('user?.avatarURL====>',  user?.avatarURL);
              formData.append('avatarURL', avatarURL || user?.avatarURL);
            }

           let form = await  formData;
            console.log('update form===>', form, formData);


            await dispatch(updateUser(formData));
            // const updatedValues = { ...values, avatarURL: avatarURL };
            // dispatch(updateUser(updatedValues));
            notification(toast, 'success', 'Your profile changed successfully.');
          } catch (err) {
            console.log(err);
            notification(toast, 'fail', 'Profile change error.');
          }
        }}
      >
        {({
            values,
            handleSubmit,
            handleBlur,
            dirty,
            handleChange,
            touched,
            errors,
            setFieldValue,
            setTouched,
          }) => (
          <FormUser autoComplete='off' onSubmit={handleSubmit}>
            <ContainerImg>
              {avatarURL ?
                // (<ImgAvatar
                //     src={URL.createObjectURL(avatarURL)}
                //     alt='avatar'
                //   />
                // ) : user?.avatarURL ? (
                <ImgAvatar src={user.avatarURL} alt='avatar' />
                // )
                :
                (<SvgAvatar>
                  <IconUser />
                </SvgAvatar>)
              }
              <LabelImg htmlFor='avatarURL'>
                <AddBtn />
                <InputFile
                  id='avatarURL'
                  type='file'
                  // onChange={handleChange}
                  onChange={event => setNewAvatarURL(event.target.files[0])}
                  accept='image/*,.png,.jpg,.gif,.web'
                  name='avatarURL'
                />
              </LabelImg>
            </ContainerImg>

            {userName ? <UserName>{userName}</UserName> : ''}
            <User>User</User>

            <BlockInput>
              <UserField
                name={'username'}
                lableName={'Name'}
                value={values.username}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your Name'
              />
              <ErrorMessage component={StyledErrorMessage} name='username' />

              <UserField
                name={'phone'}
                lableName={'Phone'}
                value={values.phone}
                type={'tel'}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='+380123456789'
              />
              <ErrorMessage component={StyledErrorMessage} name='phone' />

              <BirthdayField
                name={'birthday'}
                lableName={'Birthday'}
                value={values.birthday}
                type={'date'}
                input={true}
                maxDate={new Date()}
                selected={new Date(values.birthday)}
                onChange={e => {
                  setFieldValue('birthday', e)
                  handleDatePicker();
                }}
                placeholder={'Birthday'}
                dateFormat='yyyy/MM/dd'
                open={isOpenDate}
                onClickOutside={() => setIsOpenDate(false)}
                onFocus={() => setIsOpenDate(true)}
              />
              <ErrorMessage component={StyledErrorMessage} name='birthday' />

              {/* <ArrowDown  onClick={() => setIsOpenDate(true)}
                    onFocus={() => setIsOpenDate(false)} /> */}


              <UserField
                name={'skype'}
                lableName={'Skype'}
                value={values.skype}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Add a skype number'
              />
              <ErrorMessage component={StyledErrorMessage} name='skype' />

              <UserField
                name={'email'}
                lableName={'Email'}
                value={values.email}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Email'
              />
              <ErrorMessage component={StyledErrorMessage} name='email' />

            </BlockInput>
            <MainBtn type={'submit'} disabled={!dirty} padding='50'>Save changes</MainBtn>
          </FormUser>
        )}
      </Formik>
    </Wrapper>
  );
};


//  const OldUserForm = () => {
//
//   const [avatarURL, setAvatarURL] = useState( '');  //======= зміни
//   const [isUpdateForm, setIsUpdateForm] = useState('');
//   const [newBirthday, setNewBirthday] = useState('');
//   const [isOpenDate, setIsOpenDate] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     skype: '',
//     birthday: '',
//   });
//
//   useEffect(() => {
//     const saveFormData = localStorage.getItem('formData');
//     if (saveFormData) {
//       setFormData(JSON.parse(saveFormData));
//     }
//   }, []);
//
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);
//
//   useEffect(() => {     //???
//     if (isUpdateForm) {
//       dispatch(refreshUser());
//       setIsUpdateForm(null);
//     }
//   }, [dispatch, isUpdateForm]);
//
//   // const handleAvatarChange = (e) => {
//   //  let file = dispatch(updateAvatar(e.target.files[0]));
//   // file.then(function (res) {
//   //    console.log(res.payload);
//   //setAvatarURL(res.payload.updatedUser.avatarURL);
//   //   });
//   // };
//   return (
//     <Wrapper>
//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           name: formData.name || user?.username || '',
//           email: formData.email || user?.email || '',
//           phone: formData.phone || user?.phone || '',
//           skype: formData.skype || user?.skype || '',
//           avatarURL: formData.avatarURL || user?.avatarURL || '',  //======= зміни
//           birthday:
//             newBirthday || formData.birthday || user?.birthday
//               ? new Date(newBirthday || formData.birthday || user?.birthday)
//               : new Date(),
//         }}
//
//         onSubmit={async (values, { resetForm }) => {
//           console.log('values==>', values);
//
//           const formData = new FormData();
//           formData.append('birthday', values.birthday);
//           formData.append('avatarURL', avatarURL ? avatarURL : user?.avatarURL);
//
//           await dispatch(updateUser(formData));
//           //setIsUpdateForm(true);
//           //resetForm();
//         }}
//       >
//           <FormUser autoComplete="off" onSubmit={handleSubmit}>
//
//               <BirthdayField
//                 name={'Birthday'}
//                 lableName={'Birthday'}
//                 value={values.birthday}
//                 type={'date'}
//                 input={true}
//                 maxDate={new Date()}
//                 selected={values.birthday}
//                 onChange={data => {
//                   setNewBirthday(data);
//                   handleDatePicker();
//                 }}
//                 placeholder={"Birthday"}
//                 dateFormat="yyyy/MM/dd"
//                 open={isOpenDate}
//                 onClickOutside={() => setIsOpenDate(false)}
//                 onFocus={() => setIsOpenDate(true)}
//                 valid={birthdayValid?.valid}
//                 errorMessage={birthdayValid?.error}
//               />
