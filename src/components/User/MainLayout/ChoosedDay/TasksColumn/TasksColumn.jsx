import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { Container } from './TasksColumn.styled';
// import { TaskModal } from '../../TaskModal/TaskModal';

export const TasksColumn = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <Container>
        <ColumnHeadBar handleShowModal={handleShowModal} />
        <ColumnsTasksList status={status} />
        <AddTaskBtn handleShowModal={handleShowModal} />
      </Container>
      {/* {showModal &&
        ReactDOM.createPortal(
          <TaskModal
            handleCloseModal={handleCloseModal}
            status={status.name}
          />,
          document.querySelector('#modal-root')
        )} */}
    </>
  );
};
