import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
  TaskAvatarPriorityWrapper,
  AvatarLetter,
  AvatarImg,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {selectIsLoadingTasks} from 'redux/tasks/selectors'

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
};

export const TaskColumnCard = ({ task }) => {
  const { title, priority } = task;

  const isLoading = useSelector(selectIsLoadingTasks);
  const userSelector = useSelector(selectUser);
  const name = userSelector.user?.name || 'Name';
  const avatar = userSelector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  const originalString = title;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);

  return (
    <>
      <TaskCardWrapper>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskDetailsWrapper>
          <TaskAvatarPriorityWrapper>
            <TaskCardAvatar>
              {isLoading ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : avatar === null ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : (
                <AvatarImg src={avatar} alt="Avatar" />
              )}
            </TaskCardAvatar>
            <TaskCardPriority priority={priority}
            >
              {priority}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};