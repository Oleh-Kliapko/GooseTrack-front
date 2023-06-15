import { useSelector } from 'react-redux';
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
import { useCallback, useMemo, useState } from 'react';
import { useThrottle } from 'throttle-hooks';

export const TaskColumnCard = ({ task }) => {
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

  let position = 'fixed';


  const [isMouseDown, setIsMouseDown] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const onMouseDown = (e) => {
    console.log('down');
    setIsMouseDown(true);
  };

  const onMouseUp = (e) => {
    console.log('up');
    setIsMouseDown(false);
  };

  const onMouseMove = (e) => {
    setTop(window.event.clientY-50);
    setLeft(window.event.clientX-120);
  };

  const throttle = useThrottle(1000);
  const throttledMove = ()=>{
    throttle(onMouseMove);
  }

  return (
    <>
    <TaskCardWrapper onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
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

    {isMouseDown && 
      <TaskCardWrapper style={{position: position, top: top, left: left, width: '420px'}} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
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
