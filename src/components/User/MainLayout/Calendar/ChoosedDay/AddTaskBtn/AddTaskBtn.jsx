import { Svg, AddTask } from './AddTaskBtn.styled';
import icon from '../../../../../../images/svg/tasks.svg';

export const AddTaskBtn = ({
  id,
  getTypeOfColumn,
  title,
  setIsTaskModalOpen,
  category,
}) => {
  return (
    <AddTask onClick={() => setIsTaskModalOpen(false, category)}>
      <Svg>
        <use xlinkHref={icon + '#icon-plus-add-button'}></use>
      </Svg>{' '}
      Add task
    </AddTask>
  );
};
