// import * as ReactDOM from 'react-dom';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
import { AddTaskBtn } from './addTaskBtn/addTaskBtn';
// import { ColumnBar } from './columnBar/columnBar';
// import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
// import { TaskModal } from '../../TaskModal/TaskModal';

import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from './ColumnsTasksList/ColumnsTasksList';
import { TaskColumnsWrapper } from './TasksColumn.styled';
import { editTask } from 'redux/tasks/tasks.operations';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function TasksColumn({
  column,
  tasksForColumn,
  sortedColumnList,
  tasksForDeleteColumn,
  setDraggedTask,
  draggedTask,
}) {
  const dispatch = useDispatch();

  const handleDragStart = e => {
    if (!draggedTask) {
      return e.preventDefault();
    }
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e, colonka) => {
    e.preventDefault();
    if (draggedTask.category === colonka._id) {
      return;
    }
    const newData = { ...draggedTask, category: colonka._id };
    dispatch(editTask(newData))
      .unwrap()
      .then(() => toast.success(`Updated!`))
      .catch(e => {
        toast.error(`Unable to update task`);
      });
    setDraggedTask(null);
  };

  return (
    <TaskColumnsWrapper
      draggable={true}
      onDragStart={e => handleDragStart(e)}
      onDragOver={e => handleDragOver(e, column)}
      onDrop={e => handleDrop(e, column)}
    >
      <ColumnHeadBar
        column={column}
        tasksForDeleteColumn={tasksForDeleteColumn}
      />
      <ColumnTasksList
        tasksForColumn={tasksForColumn}
        sortedColumnList={sortedColumnList}
        setDraggedTask={setDraggedTask}
      />
      <AddTaskBtn columnId={column._id} />
    </TaskColumnsWrapper>
  );
}