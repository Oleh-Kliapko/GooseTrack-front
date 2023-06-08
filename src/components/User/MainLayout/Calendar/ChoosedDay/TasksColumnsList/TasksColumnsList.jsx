// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { TaskModal } from '../TaskModal';
// import { getTasks } from '../../redux/tasks/selectors';

export const TasksColumnsList = () => {
  const [dailyTasks, /* setDailyTasks */] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  // const filterTodo = tasks.filter(task => task.category === 'to-do');
  // const filterInProgress = tasks.filter(
  //   task => task.category === 'In progress'
  // );
  // const filterDone = tasks.filter(task => task.category === 'Done');

  return (
    <TasksColumnsListWrapper>
      <TasksColumn
        title={'To do'}
        tasks={dailyTasks}
        setIsTaskModalOpen={setIsTaskModalOpen}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
      <TasksColumn
        title={'In progress'}
        tasks={dailyTasks}
        setIsTaskModalOpen={setIsTaskModalOpen}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
      <TasksColumn
        title={'Done'}
        tasks={dailyTasks}
        setIsTaskModalOpen={setIsTaskModalOpen}
        // getTypeOfColumn={getTypeOfColumn}
        // getTask={getTask}
      />
      {isTaskModalOpen && <TaskModal closeModal={closeTaskModal} taskDetails={{
        "_id": "string",
        "title": "string",
        "start": "string",
        "end": "string",
        "priority": "string",
        "date": "2023-06-04T21:10:25.280Z",
        "category": "string",
        "owner": "string",
        "createdAt": "2023-06-04T21:10:25.280Z"
      }} />}
    </TasksColumnsListWrapper>
  );
};
