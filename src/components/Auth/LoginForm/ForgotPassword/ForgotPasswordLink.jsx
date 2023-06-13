import React, { useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal';
import { ForgotButtonLink } from './ForgotPasswordLink.styled';

export const ForgotPasswordLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ForgotButtonLink
        type="button"
        onClick={openModal}
        style={{ marginTop: '10px' }}
      >
        Forgot your password?
      </ForgotButtonLink>
      {isModalOpen && <ForgotPasswordModal onClose={closeModal} />}
    </>
  );
};
