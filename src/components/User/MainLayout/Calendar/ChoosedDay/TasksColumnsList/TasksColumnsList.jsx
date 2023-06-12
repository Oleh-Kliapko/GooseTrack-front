import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { choosedDayColumns } from 'helpers/calendar/calendarArrays';

export const TasksColumnsList = () => {

  return (
    <TasksColumnsListWrapper>
      {choosedDayColumns.map((column, index) => {
        return(
          <TasksColumn
            key={column.title}
            title={column.title}
            category={column.category}
            index={index}
          />
        )
      })}

    </TasksColumnsListWrapper>
  );
};
