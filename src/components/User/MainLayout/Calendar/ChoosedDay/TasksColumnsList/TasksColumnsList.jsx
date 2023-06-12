import { useRef, useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper, LeftBtn, RightBtn } from './TasksColumnsList.styled';
import { choosedDayColumns } from 'helpers/calendar/calendarArrays';

export const TasksColumnsList = () => {
  const [display, setDisplay] = useState('left');
  const displayStatuses = ['left', 'middle', 'right'];
  let i = useRef(0);
  const onClickLeft = () => {
    console.log(i);
    i.current = i.current - 1;
    console.log(display);
    setDisplay(displayStatuses[i.current])
  };
  const onClickRight = () => {
    console.log(i);
    i.current = i.current + 1;
    setDisplay(displayStatuses[i.current])
    console.log(display);
  }
  return (
    <TasksColumnsListWrapper>
      <LeftBtn onClick={onClickLeft} display={display}>Left</LeftBtn>
      {choosedDayColumns.map((column, index) => {
        return(
          <TasksColumn
            key={column.title}
            title={column.title}
            category={column.category}
            index={index}
            display={display}
          />
        )
      })}
      <RightBtn onClick={onClickRight} display={display}>Right</RightBtn>
    </TasksColumnsListWrapper>
  );
};
