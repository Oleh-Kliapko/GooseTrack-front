import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { selectUser } from 'redux/auth/selectors';
import { refreshUser, updateUser } from 'redux/auth/operations';
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

  // console.log('user FORM===>', user);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [avatarURL, setAvatarURL] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
    avatarURL: '',
  });

  console.log(formData);

  useEffect(() => {
    const { username, phone, birthday, skype, email, avatarURL } = user;

    const initialValues = {
      username: username || '',
      phone: phone || '',
      birthday:
       birthday
          ? new Date(birthday)
          : new Date(),
      skype: skype || '',
      email: email || '',
      avatarURL: avatarURL || '',
    };
    setFormData(initialValues);
    setAvatarURL(user.avatarURL);
  }, [user]);


  const handleSubmit =  values => {
    console.log('values SUBMIT=>', values);
    try {

      dispatch(updateUser(values));
      notification(toast, 'success', 'Your profile changed successfully.');
    } catch {
      notification(toast, 'fail', 'Profile change error.');
    }
  };

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
  const handleDatePicker = () => {
    setIsOpenDate(false);
  };

  return (
    <Wrapper>

      <Formik
        enableReinitialize={true}
        initialValues={formData}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        validateOnBlur={false}
        validateOnChange={false}
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
                (<ImgAvatar
                    src={URL.createObjectURL(avatarURL)}
                    alt='avatar'
                  />
                ) : user?.avatarURL ? (
                    <ImgAvatar src={user.avatarURL} alt='avatar' />
                  ) :
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
                  onChange={e => setAvatarURL(e.target.files[0])}
                  accept='image/*,.png,.jpg,.gif,.web'
                  name='avatarURL'
                />
              </LabelImg>
            </ContainerImg>

            <UserName>{user?.username || ''} </UserName>
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
                // placeholder='+380123456789'
                placeholder='38 (0**) *** ** **'
              />
              <ErrorMessage component={StyledErrorMessage} name='phone' />

              <BirthdayField
                name={'birthday'}
                lableName={'Birthday'}
                value={values.birthday}
                type={'date'}
                input={true}
                maxDate={new Date()}
                selected={values.birthday}
                onChange={data => {
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


// export const UserForm = () => {
//   const {user} = useSelector(selectUser);
//   const dispatch = useDispatch();
//
//   const [avatarURL, setAvatarURL] = useState(null);
//   const [isUpdateForm, setIsUpdateForm] = useState(null);
//   const [newBirthday, setNewBirthday] = useState(null);
//   const [isOpenDate, setIsOpenDate] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     skype: '',
//     birthday: '',
//   });
//
//   const  toast = useNotification();
//
//   useEffect(() => {
//     //getAvatar присилаю токен а мені з бд автар
//     const saveFormData = localStorage.getItem('formData');
//     if (saveFormData) {
//       setFormData(JSON.parse(saveFormData));
//     }
//   }, []);
//
//   useEffect(() => {
//     if (isUpdateForm) {
//       dispatch(refreshUser());
//       setIsUpdateForm(null);
//     }
//   }, [dispatch, isUpdateForm]);
//
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);
//
//   const handleDatePicker = () => {
//     setIsOpenDate(false);
//   };
//
//   return (
//     <Wrapper>
//
//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           name: formData.name || user?.username || '',
//           email: formData.email || user?.email || '',
//           phone: formData.phone || user?.phone || '',
//           skype: formData.skype || user?.skype || '',
//           birthday:
//           newBirthday || formData.birthday || user?.birthday
//               ? new Date(newBirthday || formData.birthday || user?.birthday)
//               : new Date(),
//
//         }}
//
//         onSubmit={async values  => {
//       try {
//           const formData = new FormData();
//           formData.append('username', values.name);
//           formData.append('email', values.email);
//           if (values.phone) {
//             formData.append('phone', values.phone);
//           }
//           if (values.skype) {
//             formData.append('skype', values.skype);
//           }
//           formData.append('birthday', values.birthday);
//           if (avatarURL) {
//             formData.append('avatarURL', avatarURL);
//           }
//
//            dispatch(updateUser(formData));
//
//            notification(toast, 'success', 'Your profile changed successfully.');
//
//           } catch {
//
//             notification(toast, 'fail', 'Profile change error.');
//
//           }
//         }}
//
//
//       >
//         {({
//             values,
//             handleSubmit,
//             handleChange,
//             handleBlur,
//             dirty,
//         }) => (
//
//           <FormUser autoComplete="off" onSubmit={handleSubmit}>
//
//             <ContainerImg>
//               {avatarURL ? (
//                 <ImgAvatar
//                   src={URL.createObjectURL(avatarURL)}
//                   alt="avatar"
//                 />
//               ) : user?.avatarURL ? (
//                 <ImgAvatar src={user.avatarURL} alt="avatar" />
//               ) : (
//                 <SvgAvatar>
//                   <IconUser/>
//                 </SvgAvatar>
//               )}
//               <LabelImg htmlFor="avatarURL">
//                 <AddBtn />
//                 <InputFile
//                   id="avatarURL"
//                   type="file"
//                   onChange={event => setAvatarURL(event.target.files[0])}
//                   accept="image/*,.png,.jpg,.gif,.web"
//                   name="avatarURL"
//                 />
//               </LabelImg>
//             </ContainerImg>
//
//             <UserName>{user?.username? user?.username : ''} </UserName>
//             <User>User</User>
//
//             <BlockInput>
//               <UserField
//         name={'Name'}
//         lableName={'Name'}
//         value={values.name}
//         type={'name'}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         valid={nameValid?.valid}
//         placeholder="Your Name"
//         errorMessage={nameValid?.error}
//             />
//
//                <UserField
//         name={'Phone'}
//         lableName={'Phone'}
//         value={values.phone}
//         type={'tel'}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         valid={phoneValid?.valid}
//         placeholder="38 (000) 000 00 00"
//         errorMessage={phoneValid?.error}
//               />
//
//               <BirthdayField
//                     name={'Birthday'}
//                     lableName={'Birthday'}
//                     value={values.birthday}
//                     type={'date'}
//                     input={true}
//                     maxDate={new Date()}
//                     selected={values.birthday}
//                     onChange={data => {
//                       setNewBirthday(data);
//                       handleDatePicker();
//                     }}
//                     placeholder={"Birthday"}
//                     dateFormat="yyyy/MM/dd"
//                     open={isOpenDate}
//                     onClickOutside={() => setIsOpenDate(false)}
//                     onFocus={() => setIsOpenDate(true)}
//                     valid={birthdayValid?.valid}
//                     errorMessage={birthdayValid?.error}
//               />
//               {/* <ArrowDown  onClick={() => setIsOpenDate(true)}
//                     onFocus={() => setIsOpenDate(false)} /> */}
//
//
//
//                <UserField
//         name={'Skype'}
//         lableName={'Skype'}
//         value={values.skype}
//         type={'text'}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         valid={skypeValid?.valid}
//         placeholder="Add a skype number"
//         errorMessage={skypeValid?.error}
//               />
//
//                  <UserField
//         name={'Email'}
//         lableName={'Email'}
//         value={values.email}
//         type={'text'}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         valid={emailValid?.valid}
//         placeholder="Email"
//         errorMessage={emailValid?.error}
//             />
//
//
//             </BlockInput>
//             <MainBtn type={'submit'} disabled={!dirty} padding="50">Save changes</MainBtn>
//           </FormUser>
//         )}
//       </Formik>
//     </Wrapper>
//   );
// };


