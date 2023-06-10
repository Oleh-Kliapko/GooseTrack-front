import CreateModal from 'utils/Modal/Modal';
import { TaskForm } from '../TaskForm';

export const TaskModal = ({ status, handleClose, closeModal, ...props }) => {
  return (
    <>
      <CreateModal onClose={closeModal}>
        <TaskForm closeModal={closeModal} {...props}/>
      </CreateModal>
    </>
  );
};
