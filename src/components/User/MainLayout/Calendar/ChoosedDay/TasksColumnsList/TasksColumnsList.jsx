import { useEffect, useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { TaskModal } from '../TaskModal';
import { useOutletContext } from 'react-router';
import { getTasksForOneMonth } from 'helpers/api/tasksRequests';

export const TasksColumnsList = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalStatus] = useState(false);
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [date] = useOutletContext();

  const closeTaskModal = () => {
    setIsTaskModalStatus(false);
  };

  const setIsTaskModalOpen = async (isEditing=false) => {
    await setIsTaskEditing(isEditing);
    setIsTaskModalStatus(true);
    
  }
 
  useEffect(()=>{
    const monthNumber = parseInt(date.slice(5,7));
    getTasksForOneMonth(monthNumber).then(response => {
      const tasksArrayPerMonth = response?.data?.allTasks;
      const tasksArrayPerDay = tasksArrayPerMonth.filter(task => task.date.slice(0,10) === date);
      setDailyTasks(tasksArrayPerDay);
    }).catch(error => console.log(error.message))
  }, [date]);

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
            tasks={dailyTasks.filter(task => task.category === column.category)}
            setIsTaskModalOpen={setIsTaskModalOpen}
          />
        )
      })}

      {isTaskModalOpen && 
        <TaskModal 
          closeModal={closeTaskModal} 
          isEditing={isTaskEditing}
          setIsEditing={setIsTaskEditing}
        />
      }

    </TasksColumnsListWrapper>
  );
};
