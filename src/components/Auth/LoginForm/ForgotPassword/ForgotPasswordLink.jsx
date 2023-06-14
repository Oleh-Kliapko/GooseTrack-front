import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ForgotPasswordModal from './ForgotPasswordModal';
import { ForgotButtonLink } from './ForgotPasswordLink.styled';

export const ForgotPasswordLink = () => {
  const { t } = useTranslation();
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
        {t(`sign.Forgot your password`)}
      </ForgotButtonLink>
      {isModalOpen && <ForgotPasswordModal onClose={closeModal} />}
    </>
  );
};
