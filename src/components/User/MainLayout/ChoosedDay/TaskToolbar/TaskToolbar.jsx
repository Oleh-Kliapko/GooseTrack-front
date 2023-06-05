import * as ReactDOM from 'react-dom';
import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';
import { createRef, useState } from 'react';
// import { TaskModal } from '../../TaskModal/TaskModal';
// import { TaskDelete } from 'components/TaskDelete/TaskDelete';
// import { TaskStatusModal } from 'components/TaskStatusModal/TaskStatusModal';
import { useMedia } from 'react-use';

export const TaskToolbar = props => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [editElement, setEditElement] = useState(null);
  const editRef = createRef();
  const isWide = useMedia('(min-width: 768px) ');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
  };

  return (
    <>
      <TaskToolbarList>
        <li>
          <TaskToolbarButton
            type="button"
            ref={editRef}
            onClick={() => {
              // Розміри і координати поточного елементи
              const element = editRef.current.getBoundingClientRect();
              // Якщо відстань зліва + minLeftDistance > за ширину екрану
              // то зменшуємо на ширину модалки, інакше відстань зліва без змін
              const minLeftDistance = isWide ? 165 : 135;
              const modalWidth =
                props.status === 'In progress'
                  ? minLeftDistance - 70
                  : minLeftDistance - 35;
              const elemLeft =
                element.left + minLeftDistance > window.innerWidth
                  ? element.left - modalWidth
                  : element.left;
              setEditElement({ top: element.top + 24, left: elemLeft });
              setShowStatusModal(true);
            }}
          >
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-move-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton type="button" onClick={handleShowModal}>
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-edit-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton
            type="button"
            onClick={() => setShowDeleteModal(true)}
          >
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-trash-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
      </TaskToolbarList>

      {showModal &&
        ReactDOM.createPortal(
          // <TaskModal
          //   editMode={true}
          //   handleCloseModal={handleCloseModal}
          //   {...props}
          // />,
          document.querySelector('#modal-root')
        )}
      {showDeleteModal &&
        ReactDOM.createPortal(
          // <TaskDelete
          //   handleCloseDeleteModal={handleCloseDeleteModal}
          //   id={props._id}
          // />,
          document.querySelector('#modal-root')
        )}
      {showStatusModal &&
        ReactDOM.createPortal(
          // <TaskStatusModal
          //   editRef={editElement}
          //   handleCloseStatusModal={handleCloseStatusModal}
          //   {...props}
          // />,
          document.querySelector('#modal-root')
        )}
    </>
  );
};
