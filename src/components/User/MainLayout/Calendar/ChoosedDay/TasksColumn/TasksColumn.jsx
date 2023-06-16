import { useSelector } from 'react-redux';

import { selectChoosedDate, selectMonthTasks } from 'redux/tasks/selectors';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnWrapper } from './TasksColumn.styled';

export const TasksColumn = ({ title, category, index, display }) => {
  const date = useSelector(selectChoosedDate);
  const tasks = useSelector(selectMonthTasks).filter(
    task => task.category === category
  );
  const dailyTasks = tasks.filter(task => task.date.slice(0, 10) === date);

  const currentDate = new Date(Date.now()).getTime() - 86400000;
  const choosedDate = new Date(date).getTime();

  return (
    <ColumnWrapper className={category} index={index} display={display}>
      <ColumnHeadBar title={title} category={category} />
      {dailyTasks.length !== 0 && <ColumnsTasksList tasks={dailyTasks} />}
      {currentDate <= choosedDate && (
        <AddTaskBtn title={title} category={category} />
      )}
    </ColumnWrapper>
  );
};
