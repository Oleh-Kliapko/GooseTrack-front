// import { useSelector } from 'react-redux';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
// import { getTasks } from '../../redux/tasks/selectors';

export const TasksColumnsList = ({ tasks, category, priority }) => {
  const filterTodo = tasks.filter(task => task.category === 'to-do');
  console.log(filterTodo);

  console.log('filterTodo:', { filterTodo });

  const filterInProgress = tasks.filter(
    task => task.category === 'In progress'
  );

  console.log('filterInProgress:', { filterInProgress });

  const filterDone = tasks.filter(task => task.category === 'Done');

  console.log('filterDone:', { filterDone });

  return (
    <TasksColumnsListWrapper>
      <TasksColumn
        title={'To do'}
        tasks={filterTodo}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
      <TasksColumn
        title={'In progress'}
        tasks={filterInProgress}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
      <TasksColumn
        title={'Done'}
        tasks={filterDone}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
    </TasksColumnsListWrapper>
  );
};
