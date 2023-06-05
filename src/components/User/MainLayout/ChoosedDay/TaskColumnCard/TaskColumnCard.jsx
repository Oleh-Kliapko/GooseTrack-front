import {
  Container,
  TaskPriority,
  TaskAvatarWrapper,
  TaskTitle,
  Wrapper,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { TASK_PRIORITY } from '../constants/taskPriority.constants';

export const TaskColumnCard = ({
  title = 'Lorem ipsum dolor sit amet consectetur ',
  priority = TASK_PRIORITY.low,
  ...other
}) => {
  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>
      <Wrapper>
        <Wrapper>
          <TaskAvatarWrapper>
            {/* <Avatar /> */}
          </TaskAvatarWrapper>
          <TaskPriority priority={priority}>{priority}</TaskPriority>
        </Wrapper>
        <TaskToolbar title={title} priority={priority} {...other} />
      </Wrapper>
    </Container>
  );
};
