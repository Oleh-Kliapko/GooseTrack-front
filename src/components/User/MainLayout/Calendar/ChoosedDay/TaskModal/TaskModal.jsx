import CreateModal from 'utils/Modal/Modal';
import { TaskForm } from '../TaskForm';
import { useDispatch } from 'react-redux';
import { setIsTaskModalOpen } from 'redux/tasks/slice';

export const TaskModal = ({ status, ...props }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setIsTaskModalOpen(false));
  }
  return (
    <>
      <CreateModal onClose={closeModal}>
        <TaskForm closeModal={closeModal} {...props}/>
      </CreateModal>
    </>
  )
};
