import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../../../../images/svg/tasks.svg';

export const AddTaskBtn = ({ getTypeOfColumn, title, setIsTaskModalOpen}) => {
  return (
    <>
      <AddTaskBtnStyled onClick={()=>{console.log('click'); setIsTaskModalOpen(true)}}>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
