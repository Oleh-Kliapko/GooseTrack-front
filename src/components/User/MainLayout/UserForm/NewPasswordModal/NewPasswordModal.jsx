import { useEffect } from 'react';

import CreateModal from 'utils/Modal/Modal';
import { ChangePasswordForm } from '../ChangePasswordForm';

export const NewPasswordModal = ({ onCloseModal }) => {
  const handleCloseModal = () => {
    onCloseModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };
  return (
    <>
      <CreateModal onClose={(handleBackdropClick, handleCloseModal)}>
        <ChangePasswordForm onCloseModal={handleCloseModal} />
      </CreateModal>
    </>
  );
};
