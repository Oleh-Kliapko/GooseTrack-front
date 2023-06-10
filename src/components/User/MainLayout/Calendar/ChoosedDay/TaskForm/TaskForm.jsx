import React from 'react';
import { Formik } from 'formik';
import {
  Wrapper,
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
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTask, /* selectIsCurrentTaskEditing */ } from 'redux/tasks/selectors';
import { addTask, updateTask } from 'redux/tasks/operations';
import { notification, useNotification } from 'helpers';

export const TaskForm = ({ onSubmit, closeModal, isEditing = false, category }) => {
  const toast = useNotification();
  const currentTask = useSelector(selectCurrentTask);
  const dispatch = useDispatch();
  // const isEditing = useSelector(selectIsCurrentTaskEditing);
  console.log(category);

  const initialValues = {
    title: isEditing ? currentTask?.title : '',
    start: isEditing ? currentTask?.start : '',
    end: isEditing ? currentTask?.end : '',
    priority: isEditing ? currentTask?.priority : 'low',
  };

  const createTaskObject = (values) => {

    return {
      _id: currentTask._id,
      title: values.title || '',
      start: values.start || '00:00',
      end: values.end || '00:00',
      priority: values.priority || 'low',
      date: currentTask.date.slice(0,10),
      category: category
    }
  };

  const addNewTask = (values) => {
    if(values.title === '') {
      notification(toast, 'fail', 'Task title can`t be empty');
      return;
    };
    if(values.start === '' ||  values.end === '') {
      notification(toast, 'info', 'Please, set time');
      return;
    }
    if(values.start >= values.end) {
      notification(toast, 'fail', 'End time should be bigger than start time');
      return;
    }
    const newTask = {
      title: values.title || '',
      start: values.start || '00:00',
      end: values.end || '23:59',
      priority: values.priority || 'low',
      date: currentTask.date.slice(0,10),
      category: category
    };
    dispatch(addTask(newTask));
    notification(toast, 'success', 'New task is successfully added');
    closeModal();
  };

  const saveEditingTask = (values) => {
    
    const updatedTask = createTaskObject(values);
    dispatch(updateTask(updatedTask));
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
          <StyledForm onSubmit={e => {e.preventDefault()}}>
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
                <Button aria-label='Button add' type="submit" onClick={() => addNewTask(values)}>
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
                (<Button onClick={() => saveEditingTask(values)}>
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
