import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ getTypeOfColumn, title, tasks, getTask, setIsTaskModalOpen, category}) => {

  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        getTypeOfColumn={getTypeOfColumn}
        tasks={tasks}
        setIsTaskModalOpen={setIsTaskModalOpen}
        category={category}
      />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} getTask={getTask} setIsTaskModalOpen={setIsTaskModalOpen}/>}
      <AddTaskBtn 
        getTypeOfColumn={getTypeOfColumn} 
        title={title} 
        setIsTaskModalOpen={setIsTaskModalOpen}
        category={category}
      />
    </ColumnWrapper>
  );
};
