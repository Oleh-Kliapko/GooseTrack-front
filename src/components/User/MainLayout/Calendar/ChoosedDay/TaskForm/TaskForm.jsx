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
import { selectCurrentTask, /* selectIsCurrentTaskEditing */ } from 'redux/tasks/selectors';

export const TaskForm = ({ 
    onSubmit, /* аргументом передавати об'єт такої ж структури, як приходить в taskDetails */
    closeModal,
    isEditing = false
  }) => {

  const currentTask = useSelector(selectCurrentTask);
  // const isEditing = useSelector(selectIsCurrentTaskEditing);
  console.log(currentTask);

  const initialValues = {
    title: isEditing ? currentTask?.title : '',
    start: isEditing ? currentTask?.start : '',
    end: isEditing ? currentTask?.end : '',
    priority: isEditing ? currentTask?.priority : 'low',
  };

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
          <StyledForm onSubmit={e => {e.preventDefault(); console.log(values)}}>
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
            {!isEditing ?
              (<>
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
                  // disabled={isSubmitting}
                  onClick={()=>{console.log('close'); closeModal()}}
                >
                  Cancel
                </CancelBtn>
              </>)

              :
                (<Button>
                  <Pencil 
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#ffffff"
                 />
                  Edit
                </Button>)
              }
              </>
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
