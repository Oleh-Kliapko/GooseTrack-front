import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks, getTask, setIsTaskModalOpen }) => {
  // const date = useSelector(selectChoosedDate);
  // const calendarCells = getCalendarCellsStructure(date);
  // const choosedMonth = parseInt(date.split("-")[1]);

  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log('get month tasks');
  //   dispatch(fetchMonthTasks(choosedMonth))
  // }, [choosedMonth, dispatch])
  return (
    <TasksListWrapper>
      {tasks.map(task => (
        <TaskColumnCard task={task} key={task._id} getTask={getTask} setIsTaskModalOpen={setIsTaskModalOpen}/>
      ))}
    </TasksListWrapper>
  );
};
