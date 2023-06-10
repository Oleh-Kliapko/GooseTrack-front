import CreateModal from '../../../../../utils/Modal/Modal';
import { ChangePasswordForm } from '../ChangePasswordForm';

export const NewPasswordModal = ({
  status,
  handleClose,
  closeModal,
  ...props
}) => {
  return (
    <>
      <CreateModal onClose={closeModal}>
        <ChangePasswordForm closeModal={closeModal} {...props} />
      </CreateModal>
    </>
  );
};
