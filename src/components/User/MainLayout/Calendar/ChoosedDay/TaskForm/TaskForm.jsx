import React from 'react';
import { Formik } from 'formik';
import {
  Wrapper,
  Errors,
  Input,
  Label,
  RadioButtonGroup,
  RadioButtonInput,
  RadioButtonLabel,
  Span,
  StyledForm,
  Button,
  CancelBtn
} from './TaskForm.styled';
import { ReactComponent as Plus } from "images/svg/plus.svg";
import { ReactComponent as Pencil } from "images/svg/pencil.svg";
import { useSelector } from 'react-redux';
import { selectChoosedDate, selectCurrentDate, selectCurrentTask } from 'redux/tasks/selectors';

export const TaskForm = ({ 
  closeModal /* onClick={closeModal} */, 
  taskDetails = {
    "_id": "string",
    "title": "string",
    "start": "string",
    "end": "string",
    "priority": "string",
    "date": "2023-06-04T21:10:25.280Z",
    "category": "string",
    "owner": "string",
    "createdAt": "2023-06-04T21:10:25.280Z"
    },
    isEditing, /* true false */
    setIsEditing, /* setIsEditing(true) setIsEditing(false) якщо можливо буде потрібне перемикання в самій формі*/
    onSubmit, /* аргументом передавати об'єт такої ж структури, як приходить в taskDetails */


  
    onClose,
    ...props
  }) => {

  const initialValues = {
    title: props?.title || '',
    start: props?.start || '',
    end: props?.end || '',
    priority: props?.priority || 'Low',
  };

  const currentDate = new Date().toISOString().slice(0, 10);
  const choosedDate = useSelector(selectChoosedDate);
  const currentTask = useSelector(selectCurrentTask);
  console.log(currentTask);

  return (
    <>
      <Formik 
        initialValues={initialValues}>
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
          <StyledForm onSubmit={handleSubmit}>
            <Label htmlFor="title">
              <Span>Title</Span>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <Errors>{errors.title && touched.title && errors.title}</Errors>
            </Label>

            <Wrapper>
              <Label htmlFor="start">
                <Span>Start</Span>
                <Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <Errors>{errors.start && touched.start && errors.start}</Errors>
              </Label>

              <Label htmlFor="end">
                <Span>End</Span>
                <Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <Errors>{errors.end && touched.end && errors.end}</Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>
              {['Low', 'Medium', 'High'].map(priority => (
                <RadioButtonLabel key={priority}>
                  <RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </RadioButtonLabel>
              ))}
            </RadioButtonGroup>

            <Wrapper>
              <>
                <Button aria-label='Button add' type="submit" >
                  <Plus 
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#ffffff"
                  />
                  Add
                  </Button>
                <CancelBtn
                  aria-label='Button cancel'
                  type="button"
                  disabled={isSubmitting}
                  onClick={closeModal}
                >
                  Cancel
                </CancelBtn>
                <Button>
                  <Pencil 
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#ffffff"
                 />
                  Edit
                </Button>
              </>
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
