import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';


export const ChoosedDay = () => {

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead />
      <TasksColumnsList />
    </TasksColumnsListWrapper>
  );
};

export default ChoosedDay;