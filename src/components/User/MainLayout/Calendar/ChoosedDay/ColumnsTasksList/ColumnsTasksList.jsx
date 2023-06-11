import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';
import { selectChoosedDate } from 'redux/tasks/selectors';

export const ColumnsTasksList = ({category, tasks}) => {
  const date = useSelector(selectChoosedDate);
  const tasksPerDay = tasks.filter(task => task.date.slice(0,10) === date);

  return (
    <TasksListWrapper>
      {tasksPerDay.map(task => (
        <TaskColumnCard task={task} key={uuidv4()} />
      ))}
    </TasksListWrapper>
  );
};
