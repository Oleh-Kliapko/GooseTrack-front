import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../../../../images/svg/tasks.svg';

export const AddTaskBtn = ({ getTypeOfColumn, title, setIsTaskModalOpen, category}) => {
  return (
    <>
      <AddTaskBtnStyled onClick={()=>setIsTaskModalOpen(false, category)}>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
