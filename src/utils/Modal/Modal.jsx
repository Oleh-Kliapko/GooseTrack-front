import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Modal, CloseModal } from './Modal.styled';

const rootModal = document.querySelector('#modal');

const CreateModal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onMouseDown={handleClose}>
      <Modal>
        <CloseModal onClick={onClose} />
        {children}
      </Modal>
    </Backdrop>,
    rootModal
  );
};

export default CreateModal;
