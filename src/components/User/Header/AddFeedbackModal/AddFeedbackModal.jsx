import { useState, useEffect } from 'react';

import {
  ModalWrap,
  ModalContent,
  CloseModalBtn,
} from './AddFeedbackModal.styled';

import { FeedbackForm } from '../FeedbackForm';
import { FeedbackList } from '../FeedbackList';

export const AddFeedbackModal = ({ onCloseModal }) => {
  const [isEditedReview, setIsEditReview] = useState(null);

  const onEditReview = (id, rating, message) => {
    setIsEditReview({ id, rating, message });
  };
  const handleCloseModal = () => {
    setIsEditReview(null);
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
        <FeedbackForm
          isEditReview={isEditedReview}
          editedRating={isEditedReview ? isEditedReview.rating : 0}
          editedMessage={isEditedReview ? isEditedReview.message : ''}
          onCloseModal={onCloseModal}
        />
        <FeedbackList
          onEditReview={onEditReview}
          isEditReview={isEditedReview}
        />
      </ModalContent>
    </ModalWrap>
  );
};
