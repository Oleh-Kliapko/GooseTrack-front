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
  StyledForm,
  Button,
} from './TaskForm.styled';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTask,
  selectIsCurrentTaskEditing,
} from 'redux/tasks/selectors';
import { addTask, updateTask } from 'redux/tasks/operations';
import { notification, useNotification } from 'helpers';
import { setIsTodayBusy } from 'redux/tasks/slice';
import { SecondBtn, CancelBtn } from 'utils/Buttons/MainButton.styled';

export const TaskForm = ({ onSubmit, closeModal }) => {
  const isEditing = useSelector(selectIsCurrentTaskEditing);
  const currentDate = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();

  const toast = useNotification();

  const currentTask = useSelector(selectCurrentTask);

  const initialValues = {
    title: isEditing ? currentTask?.title : '',
    start: isEditing ? currentTask?.start : '',
    end: isEditing ? currentTask?.end : '',
    priority: isEditing ? currentTask?.priority : 'low',
  };

  const createTaskObject = values => {
    return {
      _id: currentTask._id,
      title: values.title || '',
      start: values.start || '00:00',
      end: values.end || '00:00',
      priority: values.priority || 'low',
      date: currentTask.date.slice(0, 10),
      category: currentTask.category,
    };
  };

  const addNewTask = values => {
    if (values.title === '') {
      notification(toast, 'fail', 'Task title can`t be empty');
      return;
    }
    if (values.start === '' || values.end === '') {
      notification(toast, 'info', 'Please, set time');
      return;
    }
    if (values.start >= values.end) {
      notification(toast, 'fail', 'End time should be bigger than start time');
      return;
    }
    const newTask = {
      title: values.title,
      start: values.start,
      end: values.end,
      priority: values.priority || 'low',
      date: currentTask.date.slice(0, 10),
      category: currentTask.category,
    };
    dispatch(addTask(newTask));
    if (currentTask.date.slice(0, 10) === currentDate) {
      dispatch(setIsTodayBusy(true));
    }
    notification(toast, 'success', 'New task is successfully added');
    closeModal();
  };

  const saveEditingTask = values => {
    const updatedTask = createTaskObject(values);
    dispatch(updateTask(updatedTask));
    closeModal();
  };

  return (
    <>
      <Formik initialValues={initialValues}>
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
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Label htmlFor="title">
              Title
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
                Start
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
                End
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
              {['low', 'medium', 'high'].map(priority => (
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
              {isEditing ? (
                <Button onClick={() => saveEditingTask(values)}>
                  <Pencil width="18" height="18" fill="none" stroke="#ffffff" />
                  Edit
                </Button>
              ) : (
                <>
                  <SecondBtn
                    aria-label="Button add"
                    type="submit"
                    onClick={() => addNewTask(values)}
                    style={{ width: '50%' }}
                  >
                    <Plus width="20" height="20" fill="none" stroke="#ffffff" />
                    Add
                  </SecondBtn>
                  <CancelBtn
                    aria-label="Button cancel"
                    type="button"
                    // disabled={isSubmitting}
                    onClick={() => {
                      console.log('close');
                      closeModal();
                    }}
                    style={{ width: '50%' }}
                  >
                    Cancel
                  </CancelBtn>
                </>
              )}
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
