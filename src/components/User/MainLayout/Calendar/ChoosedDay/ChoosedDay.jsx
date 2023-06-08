import React, { useState, useEffect } from 'react';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllTasks } from 'redux/tasks/selectors';

// import {
//   selectAddTaskOpen,
//   selectUpDateTaskModal,
//   selectModalConfirmation,
// } from 'redux/modal/';

// import { Modal } from 'components/Modal/Modal';

// import {
//   closeModalAddTask,
//   closeModalUpDateTask,
//   closeModalConfirmation,
// } from 'redux/modal/';


// import { deleteTask } from 'redux/tasks/selectors';

// const dayFilter = (tasksMonth, date) => {
//   const filteredTasks = tasksMonth.filter(({ createAt }) => {
//     return createAt === date;
//   });

//   return filteredTasks;
// };

export const ChoosedDay = () => {
  const { currentDay } = useParams();

  const dayFromParams =
    currentDay === ':currentDay'
      ? new Date().toISOString().split('T')[0]
      : currentDay;

  /* const [tasksFilter, setTasksFilter] = useState([
    {
      title: 'Business',
      start: '11:00',
      end: '11:30',
      priority: 'low',
      date: '2023-06-04',
      category: 'to-do',
    },
  ]); */

  // console.log('tasksFilter', { tasksFilter });
  
  
  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  // console.log(choosedDay);

  // const [typeOfColumn, setTypeOfColumn] = useState(null);

  // const [taskFromCard, setTaskFromCard] = useState(null);

  const tasksMonth = useSelector(selectAllTasks);


  // const modalAddState = useSelector(selectAddTaskOpen);
  // const modalEditState = useSelector(selectUpDateTaskModal);
  // const modalConfirmationState = useSelector(selectModalConfirmation);

  // const dispatch = useDispatch();

  // const closeModal = () => {
  //   dispatch(closeModalAddTask());
  //   setTaskFromCard(null);
  // };

  // const closeEditModal = () => dispatch(closeModalUpDateTask());
  // const closeDeleteModal = () => dispatch(closeModalConfirmation());

  // const deleteTaskFu = () => {
  //   closeDeleteModal();

  //   dispatch(deleteTask(taskFromCard._id))
  //     .then(() => toast.success('taskDeleted'))
  //     .catch(() => toast.error('taskDeleteError'));
  //   setTaskFromCard(null);
  // };

  // functions for add task =============================>

  // const getTypeOfColumn = data => {
  //   setTypeOfColumn(prevState => (prevState = data));
  // };

  // const getTask = task => {
  //   setTaskFromCard(task);
  // };

  // functions for add task =============================>

  useEffect(() => {
    setChoosedDay(dayFromParams);
    // setTasksFilter(dayFilter(tasksMonth, choosedDay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksMonth, currentDay, choosedDay]);


  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead />
      <TasksColumnsList /* tasks={tasksFilter}  *//>
    </TasksColumnsListWrapper>
  );
};


export default ChoosedDay;