import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FeedbackForm } from '../FeedbackForm';
import { FeedbackList } from '../FeedbackList';
import {
  ModalWrap,
  ModalContent,
  CloseModalBtn,
} from './AddFeedbackModal.styled';

export const AddFeedbackModal = ({ onCloseModal }) => {
  const [editedReview, setEditedReview] = useState(null);
  const [isEditReview, setIsEditReview] = useState(false);

  const { t } = useTranslation();

  const onEditReview = (id, rating, message) => {
    setEditedReview({ id, rating, message });
    setIsEditReview(true);
  };
  
  const handleCloseModal = () => {
    setEditedReview(null);
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

  const handleEditReview = () => setIsEditReview(false);
  
  return (
    <ModalWrap onClick={handleBackdropClick}>
      <ModalContent>
        <CloseModalBtn type="button" onClick={handleCloseModal} />
        <FeedbackForm
          isEditReview={isEditReview}
          editedRating={editedReview ? editedReview.rating : 0}
          editedMessage={editedReview ? editedReview.message : ''}
          editedId={editedReview ? editedReview.id : ''}
          handleEditReview={handleEditReview}
        />
        <FeedbackList
          onEditReview={onEditReview}
        />
      </ModalContent>
    </ModalWrap>
  );
};
