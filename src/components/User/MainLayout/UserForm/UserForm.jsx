import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { selectUser } from 'redux/auth/selectors';
import {  updateUser } from 'redux/auth/operations';
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
  // const [newAvatarURL, setNewAvatarURL] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
    // avatarURL: '',
  });

  useEffect(() => {
    const { username, phone, birthday, skype, email } = user;

    // setAvatarURL(user.avatarURL);
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
      // avatarURL: user.avatarURL || '',
    };
    setFormData(initialValues);
  }, [user]);

  function cleanStringify(object) {
    if (object && typeof object === 'object') {
      object = copyWithoutCircularReferences([object], object);
    }
    return JSON.stringify(object);
    function copyWithoutCircularReferences(references, object) {
      const cleanObject = {};
      Object.keys(object).forEach(function(key) {
        const value = object[key];
        if (value && typeof value === 'object') {
          if (references.indexOf(value) < 0) {
            references.push(value);
            cleanObject[key] = copyWithoutCircularReferences(references, value);
            references.pop();
          } else {
            cleanObject[key] = '###_Circular_###';
          }
        } else if (typeof value !== 'function') {
          cleanObject[key] = value;
        }
      });
      return cleanObject;
    }
  }
  const handleSubmitForm =  values => {
    console.log('values SUBMIT=>', values);
    // console.log('avatar NEW ==>', avatarURL,cleanStringify(avatarURL));
    try {
      const updatedValues = { ...values, avatarURL: avatarURL };
      dispatch(updateUser(updatedValues));
      notification(toast, 'success', 'Your profile changed successfully.');
    } catch (err){
      console.log(err);
      notification(toast, 'fail', 'Profile change error.');
    }
  };

  const handleDatePicker = () => {
    setIsOpenDate(false);
  };


  console.log('user FORM===>', user);
  console.log('user avatarURL===>', avatarURL);
  // console.log('user NEWavatarURL===>', newAvatarURL);
  console.log('formData===>', formData);

  return (
    <Wrapper>

      <Formik
        enableReinitialize={true}
        initialValues={formData}
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
          <FormUser autoComplete='off' onSubmit={handleSubmitForm}>
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
                  onChange={event => {
                    console.log( 'on Change avatar===>', event.target.files[0]);
                 setAvatarURL(event.target.files[0]);
                  }}
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
                onChange={() => {
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





//
//  const OldUserForm = () => {
//   const {user} = useSelector(selectUser);
//   const dispatch = useDispatch();
//
//   const [nameValid, setNameValid] = useState('');
//   const [phoneValid, setPhoneValid] = useState('');
//   const [emailValid, setEmailValid] = useState('');
//   const [birthdayValid, setBirthdayValid] = useState('');
//   const [skypeValid, setSkypeValid] = useState('');
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
//   useEffect(() => {
//     setAvatarURL( user?.avatarURL || null);     //======= зміни
//   }, [user?.avatarURL]);
//
//   // const handleAvatarChange = (e) => {
//   //  let file = dispatch(updateAvatar(e.target.files[0]));
//   // file.then(function (res) {
//   //    console.log(res.payload);
//   //setAvatarURL(res.payload.updatedUser.avatarURL);
//   //   });
//   // };
//   console.log('avatarURL in form',  user?.avatarURL);
//   return (
//     <Wrapper>
//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           name: formData.name || user?.username || '',
//           email: formData.email || user?.email || '',
//           phone: formData.phone || user?.phone || '',
//           skype: formData.skype || user?.skype || '',
//           avatarURL: formData.avatarURL || user?.avatarURL || null,  //======= зміни
//           birthday:
//             newBirthday || formData.birthday || user?.birthday
//               ? new Date(newBirthday || formData.birthday || user?.birthday)
//               : new Date(),
//
//         }}
//
//
//         onSubmit={async (values, { resetForm }) => {
//           console.log('values==>', values);
//           const validationResponse = await validateUserForm(values);
//           setEmailValid(validationResponse.email);
//           setNameValid(validationResponse.name);
//           setPhoneValid(validationResponse.phone);
//           setSkypeValid(validationResponse.skype);
//           setBirthdayValid(validationResponse.birthday);
//
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
//           formData.append('avatarURL', avatarURL ? avatarURL : user?.avatarURL);
//
//           await dispatch(updateUser(formData));
//           //setIsUpdateForm(true);
//           //resetForm();
//         }}
//
//       >
//         {({
//             values,
//             handleSubmit,
//             handleChange,
//             handleBlur,
//             dirty,
//           }) => (
//
//           <FormUser autoComplete="off" onSubmit={handleSubmit}>
//
//             <ContainerImg>
//               {avatarURL ? (
//                 <ImgAvatar
//                   src={avatarURL}
//                   //src={URL.createObjectURL(avatarURL)}
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
//                   //onChange={handleAvatarChange}
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
//                 name={'Name'}
//                 lableName={'Name'}
//                 value={values.name}
//                 type={'name'}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 valid={nameValid?.valid}
//                 placeholder="Your Name"
//                 errorMessage={nameValid?.error}
//               />
//
//               <UserField
//                 name={'Phone'}
//                 lableName={'Phone'}
//                 value={values.phone}
//                 type={'tel'}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 valid={phoneValid?.valid}
//                 placeholder="38 (000) 000 00 00"
//                 errorMessage={phoneValid?.error}
//               />
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
//               {/* <ArrowDown  onClick={() => setIsOpenDate(true)}
//                     onFocus={() => setIsOpenDate(false)} /> */}
//
//
//
//               <UserField
//                 name={'Skype'}
//                 lableName={'Skype'}
//                 value={values.skype}
//                 type={'text'}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 valid={skypeValid?.valid}
//                 placeholder="Add a skype number"
//                 errorMessage={skypeValid?.error}
//               />
//
//               <UserField
//                 name={'Email'}
//                 lableName={'Email'}
//                 value={values.email}
//                 type={'text'}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 valid={emailValid?.valid}
//                 placeholder="Email"
//                 errorMessage={emailValid?.error}
//               />
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
//
//
