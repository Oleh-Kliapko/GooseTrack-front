import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, updateTask } from 'redux/tasks/operations';
import {
  setCurrentTask,
  setIsCurrentTaskEditing,
  setIsTaskModalOpen,
} from 'redux/tasks/slice';
import { choosedDayColumns } from 'helpers/calendar/calendarArrays';
import { checkIsTodayBusy } from 'helpers/checkIsTodayBusy';
import {
  TaskToolbarStyled,
  TaskToolbarBtn,
  Svg,
  TaskModalChangeStatusWrapper,
  TaskModalChangeStatusBtn,
  TaskModalChangeStatusBtnElem,
  StateStatus,
  Overlay,
} from './TaskToolbar.styled';
import icon from 'images/svg/tasks.svg';

export const TaskToolbar = ({ task }) => {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 20 });
  const modalRef = useRef(null);

  const currentDate = new Date().toISOString().slice(0, 10);

  const toggleStatusModal = event => {
    const cardRect = event.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: cardRect.top + window.pageYOffset,
      left: cardRect.left + window.pageXOffset,
    });

    setIsStatusModalOpen(prev => !prev);
  };

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setIsStatusModalOpen(prev => !prev);
      }
    };
    isStatusModalOpen && window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isStatusModalOpen, setIsStatusModalOpen]);

  const dispatch = useDispatch();

  const onStatusChange = async category => {
    const taskForUpdate = {
      _id: task._id,
      title: task.title,
      start: task.start,
      end: task.end,
      priority: task.priority,
      date: task.date.slice(0, 10),
      category,
    };
    await dispatch(updateTask(taskForUpdate));
    checkIsTodayBusy(dispatch);
  };

  const onDeleteTask = async () => {
    await dispatch(deleteTask(task._id));
    if (task.date.slice(0, 10) === currentDate) {
      checkIsTodayBusy(dispatch);
    }
  };

  const onEditTask = () => {
    dispatch(setIsTaskModalOpen(true));
    dispatch(setIsCurrentTaskEditing(true));
    dispatch(setCurrentTask(task));
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn onClick={toggleStatusModal}>
          <Svg>
            <use xlinkHref={icon + '#icon-round-arrow'}></use>
          </Svg>
        </TaskToolbarBtn>

        {isStatusModalOpen && (
          <TaskModalChangeStatusWrapper
            data-modal="true"
            ref={modalRef}
            modalTop={modalPosition.top + 20}
            modalLeft={modalPosition.left}
          >
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
      {isStatusModalOpen && <Overlay onClick={toggleStatusModal} />}
    </>
  );
};
