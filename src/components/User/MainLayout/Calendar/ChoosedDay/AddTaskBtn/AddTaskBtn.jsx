import {
  AddTask,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../../../../images/svg/tasks.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTask, setIsCurrentTaskEditing, setIsTaskModalOpen } from 'redux/tasks/slice';
import { selectChoosedDate } from 'redux/tasks/selectors';

export const AddTaskBtn = ({category}) => {
  const choosedDate = useSelector(selectChoosedDate);
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
        date: choosedDate,
        category: category
      }
    ))
  };

  return (
    <>
      <AddTask onClick={openModal  }>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        Add task
      </AddTask>
    </>
  );
};
