// import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';


// export const TaskForm = ({ onClose, ...props }) => {
//   const dispatch = useDispatch();
//   const editMode = props?.editMode || false;
//   const status = props?.status || 'To do';

//   const initialValues = {
//     title: props?.title || '',
//     start: props?.start || '',
//     end: props?.end || '',
//     priority: props?.priority || 'Low',
//   };

//   const { curentDay: date } = useParams();

//   const 
  
//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validateOnBlur={true}
//         validateOnChange={true}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//         handleAdd(values);
//         setSubmitting(false);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           setFieldValue,
//         }) => (

//       </Formik>
//     </>
//   )
// };

export const TaskForm = () => {
  return <div>Task Form</div>;
};