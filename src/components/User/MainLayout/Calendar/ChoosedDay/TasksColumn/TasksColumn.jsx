import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { useSelector } from 'react-redux';
import { selectMonthTasks } from 'redux/tasks/selectors';

export const TasksColumn = ({title, category}) => {
  const tasks = useSelector(selectMonthTasks);
  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        tasks={tasks}
        category={category}
      />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn  
        title={title} 
        category={category}
      />
    </ColumnWrapper>
  );
};
