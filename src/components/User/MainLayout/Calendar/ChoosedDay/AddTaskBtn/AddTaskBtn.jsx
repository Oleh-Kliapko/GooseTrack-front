import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../../../../images/svg/tasks.svg';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setIsCurrentTaskEditing, setIsTaskModalOpen } from 'redux/tasks/slice';

export const AddTaskBtn = ({category}) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setIsTaskModalOpen(true));
    dispatch(setIsCurrentTaskEditing(false));
    dispatch(setCurrentTask(
      {
        _id: "",
        title: "",
        start: "00:00",
        end: "00:00",
        priority: "low",
        date: new Date().toISOString(),
        category: category
      }
    ))
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal  }>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
