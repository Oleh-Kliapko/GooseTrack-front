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
  ClockIcon,
  WrappClock,
} from './TaskForm.styled';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  selectCurrentTask,
  selectIsCurrentTaskEditing,
} from 'redux/tasks/selectors';
import { addTask, updateTask } from 'redux/tasks/operations';
import { notification, useNotification } from 'helpers';
import { setIsTodayBusy } from 'redux/tasks/slice';
import { SecondBtn, CancelBtn } from 'utils/Buttons/MainButton.styled';
import { getNext15MinuteTimes } from 'helpers/calendar/getNext15MinutesTime';

export const TaskForm = ({ onSubmit, closeModal }) => {
  const isEditing = useSelector(selectIsCurrentTaskEditing);
  const currentDate = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const toast = useNotification();

  const currentTask = useSelector(selectCurrentTask);

  const { nearestFutureTime, nextFutureTime } = getNext15MinuteTimes();

  const initialValues = {
    title: isEditing ? currentTask?.title : '',
    start: isEditing ? currentTask?.start : nearestFutureTime,
    end: isEditing ? currentTask?.end : nextFutureTime,
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
      notification(toast, 'fail', t(`notifications.Task Title`));
      return;
    }
    if (values.start === '' || values.end === '') {
      notification(toast, 'info', t(`notifications.Time`));
      return;
    }
    if (values.start >= values.end) {
      notification(toast, 'fail', t(`notifications.Time Error`));
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
    notification(toast, 'success', t(`notifications.Task Success`));
    closeModal();
  };

  const saveEditingTask = values => {
    const updatedTask = createTaskObject(values);
    dispatch(updateTask(updatedTask));
    closeModal();
  };

  const priorityArray = [t(`tasks.Low`),t(`tasks.Medium`),t(`tasks.High`)];

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
              {t(`tasks.Title`)}
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder={t(`tasks.Enter text`)}
              />
              <Errors>{errors.title && touched.title && errors.title}</Errors>
            </Label>

            <Wrapper>
              <Label htmlFor="start">
                {t(`tasks.Start`)}
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
                <Errors>
                  {errors.start && touched.start && errors.start}

                  <WrappClock>
                    <ClockIcon />
                  </WrappClock>
                </Errors>
              </Label>

              <Label htmlFor="end">
                {t(`tasks.End`)}
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
                <Errors>
                  {errors.end && touched.end && errors.end}
                  <WrappClock>
                    <ClockIcon />
                  </WrappClock>
                </Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>

              {/* {[t(`tasks.Low`), t(`tasks.Medium`), t(`tasks.High`)].map(priority => ( */}
              {['low', 'medium', 'high'].map((priority, index) => (
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
                  {priorityArray[index]}
                </RadioButtonLabel>
              ))}
            </RadioButtonGroup>

            <Wrapper>
              {isEditing ? (
                <Button onClick={() => saveEditingTask(values)}>
                  <Pencil width="18" height="18" fill="none" stroke="#ffffff" />
                  {t(`tasks.Edit`)}
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
                    {t(`tasks.Add`)}
                  </SecondBtn>
                  <CancelBtn
                    aria-label="Button cancel"
                    type="button"
                    // disabled={isSubmitting}
                    onClick={() => {
                      closeModal();
                    }}
                    style={{ width: '50%' }}
                  >
                    {t(`tasks.Cancel`)}
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
