import { useRef, useState } from 'react';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper, LeftBtn, RightBtn } from './TasksColumnsList.styled';
import { choosedDayColumns } from 'helpers/calendar/calendarArrays';
import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';

export const TasksColumnsList = () => {
  const [display, setDisplay] = useState('left');
  const displayStatuses = ['left', 'middle', 'right'];
  let i = useRef(0);
  const onClickLeft = () => {
    i.current = i.current - 1;
    setDisplay(displayStatuses[i.current])
  };
  const onClickRight = () => {
    i.current = i.current + 1;
    setDisplay(displayStatuses[i.current])
  }
  return (
    <TasksColumnsListWrapper>
      <LeftBtn onClick={onClickLeft} display={display}>
        <PeriodBtn>
            <IconPag id="left" />
        </PeriodBtn>
      </LeftBtn>
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
      <RightBtn onClick={onClickRight} display={display}>
        <PeriodBtn>
            <IconPag id="right" />
        </PeriodBtn>
      </RightBtn>
    </TasksColumnsListWrapper>
  );
};
