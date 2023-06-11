import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { useSelector } from 'react-redux';
import { selectMonthTasks } from 'redux/tasks/selectors';

export const TasksColumn = ({title, category}) => {
  const tasks = useSelector(selectMonthTasks).filter(task => task.category === category);
  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        category={category}
      />
      {tasks.length === 0
        ?
        <AddTaskBtn  
          title={title} 
          category={category}
        />
        :
        <ColumnsTasksList tasks={tasks}/>
      } 
    </ColumnWrapper>
  );
};
