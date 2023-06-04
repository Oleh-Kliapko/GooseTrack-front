import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import { TasksListContainer } from './ColumnsTasksList.styled';

export default function TaskColumnList({
  tasksForColumn,
  sortedColumnList,
  column,
  setDraggedTask,
}) {
  return (
    <TasksListContainer>
      {tasksForColumn?.map(task => (
        <TaskColumnCard
          key={'task-' + task._id}
          task={task}
          sortedColumnList={sortedColumnList}
          column={column}
          setDraggedTask={setDraggedTask}
        />
      ))}
    </TasksListContainer>
  );
}
