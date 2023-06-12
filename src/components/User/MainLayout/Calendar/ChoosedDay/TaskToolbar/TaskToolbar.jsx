import {
  TaskToolbarStyled,
  TaskToolbarBtn,
  Svg,
  TaskModalChangeStatusWrapper,
  TaskModalChangeStatusBtn, 
  TaskModalChangeStatusBtnElem,
  StateStatus,
} from './TaskToolbar.styled';

import icon from '../../../../../../images/svg/tasks.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTask, updateTask } from 'redux/tasks/operations';
import { setCurrentTask, setIsCurrentTaskEditing, setIsTaskModalOpen } from 'redux/tasks/slice';
import { choosedDayColumns } from 'helpers/calendar/calendarArrays';
import { checkIsTodayBusy } from 'helpers/checkIsTodayBusy';


export const TaskToolbar = ({ task }) => {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);

  const toggleStatusModal = () => {
    setIsStatusModalOpen(prev => !prev);
  };

  const dispatch = useDispatch();

  const onStatusChange = category => {
    const taskForUpdate = {
      _id: task._id,
      title: task.title,
      start: task.start,
      end: task.end,
      priority: task.priority,
      date: task.date.slice(0,10),
      category,
    };
    dispatch(updateTask(taskForUpdate));
  };

  const onDeleteTask = async () => {
    await dispatch(deleteTask(task._id));
    if(task.date.slice(0,10) === currentDate) {
      checkIsTodayBusy(dispatch);
    };
  };

  const onEditTask = () => {
    dispatch(setIsTaskModalOpen(true)); 
    dispatch(setIsCurrentTaskEditing(true)); 
    dispatch(setCurrentTask(task));
  };

  return (
    <TaskToolbarStyled>

      <TaskToolbarBtn onClick={toggleStatusModal}>
        <Svg>
          <use xlinkHref={icon + '#icon-round-arrow'}></use>
        </Svg>
      </TaskToolbarBtn>

      {isStatusModalOpen && (
        <TaskModalChangeStatusWrapper data-modal="true">
          {choosedDayColumns
            .filter(column => column.category !== task.category)
            .map((column, index) => (
              <TaskModalChangeStatusBtn
                key={index}
                onClick={() => {
                  onStatusChange(column.category);
                }}
              >
                <TaskModalChangeStatusBtnElem>
                  <StateStatus>{column.title}</StateStatus>
                  <Svg>
                    <use xlinkHref={icon + '#icon-round-arrow'}></use>
                  </Svg>
                </TaskModalChangeStatusBtnElem>
              </TaskModalChangeStatusBtn>
            ))}
        </TaskModalChangeStatusWrapper>
      )} 

      <TaskToolbarBtn onClick={onEditTask}>
        <Svg>
          <use xlinkHref={icon + '#icon-pencil'}></use>
        </Svg>
      </TaskToolbarBtn>

      <TaskToolbarBtn onClick={onDeleteTask}>
        <Svg>
          <use xlinkHref={icon + '#icon-trash'}></use>
        </Svg>
      </TaskToolbarBtn>

    </TaskToolbarStyled>
  );
};
