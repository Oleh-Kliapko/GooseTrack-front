import CreateModal from 'utils/Modal/Modal';
import { TaskForm } from '../TaskForm';

export const TaskModal = ({ status, onClose, ...props }) => {
  return (
    <>
      <CreateModal onClose={onClose}>
        <TaskForm status={status} onClose={onClose} {...props}/>
      </CreateModal>
    </>
  )
};
