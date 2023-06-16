import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectUser } from 'redux/auth/selectors';
import { selectIsLoadingTasks } from 'redux/tasks/selectors';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
  TaskAvatarPriorityWrapper,
  AvatarLetter,
  AvatarImg,
  TaskTime,
  TopLine,
} from './TaskColumnCard.styled';
import { truncateString } from 'helpers/calendar/calendarFucntions';
import { useState } from 'react';
//import { useThrottle } from 'throttle-hooks';
import { getColumnsCoordinates } from 'helpers/calendar/dragNdrop';
import { setCurrentTask } from 'redux/tasks/slice';
import { updateTask } from 'redux/tasks/operations';

export const TaskColumnCard = ({ task, categoryUnderMouse }) => {
  const { title, priority, start, end } = task;

  const isLoading = useSelector(selectIsLoadingTasks);
  const userSelector = useSelector(selectUser);
  const name = userSelector?.user?.username || 'Name';
  const avatar = userSelector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();
  const originalString = title;
  const maxLengthString = 31;
  const truncatedString = truncateString(originalString, maxLengthString);

  const { t } = useTranslation();
  const priorityArray = [t(`tasks.Low`), t(`tasks.Medium`), t(`tasks.High`)];
  const taskPriority = priority => {
    switch (priority) {
      case 'low':
        return priorityArray[0];
      case 'medium':
        return priorityArray[1];
      case 'high':
        return priorityArray[2];
      default:
        return;
    }
  };

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const dispatch = useDispatch();

  const columnsCoordinates = getColumnsCoordinates();

  const getCategoryOfColumnUnderMouse = (x, y) => {
    if(columnsCoordinates[0].y <= x && x <= columnsCoordinates[0].y + columnsCoordinates[0].width && columnsCoordinates[0].x <= y && y <= columnsCoordinates[0].x + columnsCoordinates[0].height) {
      return 'to-do';
    };
    if(columnsCoordinates[1].y <= x && x <= columnsCoordinates[1].y + columnsCoordinates[1].width && columnsCoordinates[1].x <= y && y <= columnsCoordinates[1].x + columnsCoordinates[1].height) {
      return 'in-progress';
    };
    if(columnsCoordinates[2].y <= x && x <= columnsCoordinates[2].y + columnsCoordinates[2].width && columnsCoordinates[2].x <= y && y <= columnsCoordinates[2].x + columnsCoordinates[2].height) {
      return 'done';
    };
    return task.category;
}

  const onMouseDown = (e) => {
    setIsMouseDown(true);
    dispatch(setCurrentTask(task));    
  };

  const onMouseUp = (e) => {
    setIsMouseDown(false);
    const newCategory = getCategoryOfColumnUnderMouse(e.clientX, e.clientY);
    const taskObject = {
      _id: task._id,
      title: task.title,
      start: task.start || '00:00',
      end: task.end || '00:00',
      priority: task.priority || 'low',
      date: task.date.slice(0, 10),
      category: newCategory,
    };
    dispatch(updateTask(taskObject))
  };

  const onMouseMove = (e) => {
    setTop(window.event.clientY-50);
    setLeft(window.event.clientX-120);
  };

  // const throttle = useThrottle(1000);
  // const throttledMove = ()=>{
  //   throttle(onMouseMove);
  // }

  return (
    <>
    {!isMouseDown ? <TaskCardWrapper onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <TopLine>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskTime>
          {start} - {end}
        </TaskTime>
      </TopLine>
      <TaskDetailsWrapper>
        <TaskAvatarPriorityWrapper>
          <TaskCardAvatar>
            {isLoading || !avatar || avatar === '' ? (
              <AvatarLetter>{firstLetter}</AvatarLetter>
            ) : (
              <AvatarImg src={avatar} alt="Avatar" />
            )}
          </TaskCardAvatar>
          <TaskCardPriority priority={priority}>
            {taskPriority(priority)}
          </TaskCardPriority>
        </TaskAvatarPriorityWrapper>
        <TaskToolbar task={task} />
      </TaskDetailsWrapper>
    </TaskCardWrapper>
    : 
      <TaskCardWrapper style={{position: 'fixed', top: top, left: left, width: '420px', zIndex: 100}} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <TopLine>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskTime>
          {start} - {end}
        </TaskTime>
      </TopLine>
      <TaskDetailsWrapper>
        <TaskAvatarPriorityWrapper>
          <TaskCardAvatar>
            {isLoading || !avatar || avatar === '' ? (
              <AvatarLetter>{firstLetter}</AvatarLetter>
            ) : (
              <AvatarImg src={avatar} alt="Avatar" />
            )}
          </TaskCardAvatar>
          <TaskCardPriority priority={priority}>
            {taskPriority(priority)}
          </TaskCardPriority>
        </TaskAvatarPriorityWrapper>
        <TaskToolbar task={task} />
      </TaskDetailsWrapper>
    </TaskCardWrapper>}
    </>
  );
};
