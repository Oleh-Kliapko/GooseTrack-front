import { AddTaskBtnStyled, Svg } from './AddTaskBtnHead.styled';
import icon from '../../../../../../images/svg/tasks.svg';


export const AddTaskBtnHead = ({ title, getTypeOfColumn, tasks }) => {
  // const dispatch = useDispatch();

  // const openModal = () => {
  //   dispatch(openModalAddTask());
  //   getTypeOfColumn({ status: title });
  // };

  return (
    <>
      <AddTaskBtnStyled >
        <Svg>
          <use xlinkHref={icon + '#icon-add-button-round'}></use>
        </Svg>
      </AddTaskBtnStyled>
    </>
  );
};
