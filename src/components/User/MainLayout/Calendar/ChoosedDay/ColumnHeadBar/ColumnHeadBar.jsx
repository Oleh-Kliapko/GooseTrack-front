import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({
  getTypeOfColumn,
  title,
  tasks,
  setIsTaskModalOpen,
  category,
}) => {
  return (
    <ColumnHeadWrapper>
      <TitleColumn>{title}</TitleColumn>
      <AddTaskBtnHead
        tasks={tasks}
        getTypeOfColumn={getTypeOfColumn}
        title={title}
        setIsTaskModalOpen={setIsTaskModalOpen}
        category={category}
      />
    </ColumnHeadWrapper>
  );
};
