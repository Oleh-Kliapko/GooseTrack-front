import { useEffect, useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { TaskModal } from '../TaskModal';
import { useOutletContext } from 'react-router';
import { getTasksForOneMonth } from 'helpers/api/tasksRequests';

export const TasksColumnsList = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [date] = useOutletContext();

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  useEffect(()=>{
 
    const monthNumber = parseInt(date.slice(5,7));
    getTasksForOneMonth(monthNumber).then(response => {
      setDailyTasks(response?.data?.allTasks)
    }).catch(error => console.log(error.message))
  }, [date]);

  console.log(dailyTasks);
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

  // const filterTodo = tasks.filter(task => task.category === 'to-do');
  // const filterInProgress = tasks.filter(
  //   task => task.category === 'In progress'
  // );
  // const filterDone = tasks.filter(task => task.category === 'Done');

  return (
    <TasksColumnsListWrapper>
      {columns.map(column => {
        return(
          <TasksColumn
            title={column.title}
            tasks={dailyTasks.filter(task => task.category === column.category)}
            setIsTaskModalOpen={setIsTaskModalOpen}
          />
        )
      })}

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
