import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { useSelector } from 'react-redux';
import { selectChoosedDate, selectMonthTasks } from 'redux/tasks/selectors';

export const TasksColumn = ({title, category}) => {
  const date = useSelector(selectChoosedDate);
  const tasks = useSelector(selectMonthTasks).filter(task => task.category === category);
  const dailyTasks = tasks.filter((task => task.date.slice(0,10) === date))
  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        category={category}
      />
      {dailyTasks.length === 0
        ?
        <AddTaskBtn  
          title={title} 
          category={category}
        />
        :
        <ColumnsTasksList tasks={dailyTasks}/>
      } 
    </ColumnWrapper>
  );
};
