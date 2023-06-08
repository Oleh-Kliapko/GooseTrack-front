import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks, getTask, setIsTaskModalOpen }) => {
  return (
    <TasksListWrapper>
      {tasks.map(task => (
        <TaskColumnCard task={task} key={task._id} getTask={getTask} setIsTaskModalOpen={setIsTaskModalOpen}/>
      ))}
    </TasksListWrapper>
  );
};
