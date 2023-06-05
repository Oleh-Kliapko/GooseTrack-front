import { useSelector } from 'react-redux';
import {
  selectIndexCurrentDay,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { TaskColumnCard } from '../../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ status }) => {
  const tasks = useSelector(selectTasks);

  const indexCurrentDay = useSelector(selectIndexCurrentDay);
  const dayTasks = tasks[indexCurrentDay];

  let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter(task => task.status === status.name);
  }

  return (
    <>
      <TasksList>
        {filteredDayTasks &&
          filteredDayTasks.map(task => (
            <li key={task._id}>
        <TaskColumnCard {...task} />
            </li>
          ))}
      </TasksList>
    </>
  );
};
