import { useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { TaskModal } from '../TaskModal';
import { useOutletContext } from 'react-router';
// import { getTasksForOneMonth } from 'helpers/api/tasksRequests';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTask } from 'redux/tasks/operations';
import { selectChoosedDate, selectTasksCurrentMonth } from 'redux/tasks/selectors';

export const TasksColumnsList = () => {
  const columns = [
    {
      title: 'To do',
      category: 'to-do'
    }, {
      title: 'In progres',
      category: 'in-progress'
    }, {
      title: 'Done',
      category: 'done'
    }]; // зробити перевикористовуваним в ключі мови

  return (
    <TasksColumnsListWrapper>
      {columns.map(column => {
        return(
          <TasksColumn
            key={column.title}
            title={column.title}
            category={column.category}
          />
        )
      })}

    </TasksColumnsListWrapper>
  );
};
