import { useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { TaskModal } from '../TaskModal';
import { useOutletContext } from 'react-router';
// import { getTasksForOneMonth } from 'helpers/api/tasksRequests';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTask } from 'redux/tasks/operations';
import { selectTasksCurrentMonth } from 'redux/tasks/selectors';

export const TasksColumnsList = () => {
 // const [dailyTasks, setDailyTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalStatus] = useState(false);
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [nesTaskCategory, setNewTaskCategory] = useState('to-do');
  const [date] = useOutletContext();
  const dispatch = useDispatch();
  const storeTasks = useSelector(selectTasksCurrentMonth);
  const dailyTasks = storeTasks.filter(task => task.date.slice(0,10) === date);
  const closeTaskModal = () => {
    setIsTaskModalStatus(false);
    dispatch(setCurrentTask({
      _id: "",
      title: "",
      start: "00:00",
      end: "00:00",
      priority: "low",
      date: new Date().toISOString(),
      category: "to-do"
    }))
  };


  const setIsTaskModalOpen = async (isEditing, category) => {
    setIsTaskEditing(isEditing);
    setNewTaskCategory(category);
    setTimeout(() => {
      setIsTaskModalStatus(true)
    }, 300)
    
    //setIsTaskModalStatus(true);
    
  }
 
  // useEffect(()=>{
  //   const monthNumber = parseInt(date.slice(5,7));
  //   getTasksForOneMonth(monthNumber).then(response => {
  //     // const tasksArrayPerMonth = response?.data?.allTasks;
  //     // const tasksArrayPerDay = tasksArrayPerMonth.filter(task => task.date.slice(0,10) === date);
  //     // setDailyTasks(tasksArrayPerDay);
  //   }).catch(error => console.log(error.message))
  // }, [date]);
console.log(isTaskEditing);

  const columns = [
    {
      title: 'To do',
      category: 'to-do',
    },
    {
      title: 'In progres',
      category: 'in-progress',
    },
    {
      title: 'Done',
      category: 'done',
    },
  ]; // зробити перевикористовуваним в ключі мови

  return (
    <TasksColumnsListWrapper>
      {columns.map(column => {
        return (
          <TasksColumn
            key={column.title}
            title={column.title}
            tasks={dailyTasks.filter(task => task.category === column.category)}
            setIsTaskModalOpen={setIsTaskModalOpen}
            category={column.category}
          />
        );
      })}

      {isTaskModalOpen && 
        <TaskModal 
          closeModal={closeTaskModal} 

          isEditing={isTaskEditing}
          setIsEditing={setIsTaskEditing}
          category={nesTaskCategory}
        />
      )}
    </TasksColumnsListWrapper>
  );
};
