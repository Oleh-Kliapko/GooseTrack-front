import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { Wrapper } from './ChoosedDay.styled';

const ChoosedDay = () => {
  return (
    <Wrapper>
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrapper>
  );
};
export default ChoosedDay;
