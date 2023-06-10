import { useDispatch, useSelector } from 'react-redux';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';
import { selectChoosedDate, selectMonthTasks, selectTasksCurrentMonth } from 'redux/tasks/selectors';
import { useEffect } from 'react';
import { fetchMonthTasks } from 'redux/tasks/operations';

export const ColumnsTasksList = () => {

  const date = useSelector(selectChoosedDate);
  const choosedMonth = parseInt(date.split("-")[1]);
  const tasks = useSelector(selectMonthTasks);
  const dailyTasks = tasks.filter(task => task.date.slice(0,10) === date);

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   console.log('get month tasks');
  //   dispatch(fetchMonthTasks(choosedMonth))
  // }, [choosedMonth, dispatch])
  return (
    <TasksListWrapper>
      {dailyTasks.map(task => (
        <TaskColumnCard task={task} key={task._id} />
      ))}
    </TasksListWrapper>
  );
};
