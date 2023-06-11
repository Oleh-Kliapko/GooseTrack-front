import { useEffect } from 'react';

import {
  ModalWrap,
  ModalContent,
  CloseModalBtn,
} from './NewPasswordModal.styles';

import { ChangePasswordForm } from '../ChangePasswordForm';

export const NewPasswordModal = ({ onCloseModal, closeModal, ...props }) => {
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
    <ModalWrap onClick={handleBackdropClick}>
      <ModalContent>
        <CloseModalBtn type="button" onClick={handleCloseModal} />
        <ChangePasswordForm onCloseModal={handleCloseModal} />
      </ModalContent>
    </ModalWrap>
  );
};

// import CreateModal from '../../../../../utils/Modal/Modal';
// import { ChangePasswordForm } from '../ChangePasswordForm';

// export const NewPasswordModal = ({
//   status,
//   handleClose,
//   onClose,
//   closeModal,
//   ...props
// }) => {
//   return (
//     <>
//       <CreateModal onClose={closeModal}>
//         <ChangePasswordForm onCloseModal={closeModal} {...props} />
//       </CreateModal>
//     </>
//   );
// };
