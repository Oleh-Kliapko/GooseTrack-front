import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { Wrapper } from './ChoosedDay.styled';
import { TasksColumn } from './TasksColumn';

const ChoosedDay = () => {
  return (
    <Wrapper>
      <DayCalendarHead /> 
      <TasksColumn />
    </Wrapper>
  );
};
export default ChoosedDay;