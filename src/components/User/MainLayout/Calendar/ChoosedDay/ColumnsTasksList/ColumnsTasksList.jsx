import { v4 as uuidv4 } from 'uuid';

import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ category, tasks }) => {
  return (
    <TasksListWrapper>
      {tasks.map(task => (
        <TaskColumnCard task={task} key={uuidv4()} />
      ))}
    </TasksListWrapper>
  );
};
