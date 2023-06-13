import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setCurrentTask, setIsCurrentTaskEditing, setIsTaskModalOpen } from 'redux/tasks/slice';
import { selectChoosedDate } from 'redux/tasks/selectors';
import icon from 'images/svg/tasks.svg';
import { AddTask, Svg } from './AddTaskBtn.styled';

export const AddTaskBtn = ({category}) => {
  const { t } = useTranslation();
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
      <AddTask onClick={openModal  }>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        {t(`tasks.Add task`)}
      </AddTask>
  );
};