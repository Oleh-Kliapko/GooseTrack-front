import CreateModal from 'utils/Modal/Modal';
import { TaskForm } from '../TaskForm';

export const TaskModal = ({ status, handleClose, ...props }) => {
  return (
    <>
      <CreateModal onClose={handleClose}>
        <TaskForm status={status} onClose={handleClose} {...props}/>
      </CreateModal>
    </>
  )
};
