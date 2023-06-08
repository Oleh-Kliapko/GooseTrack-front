import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOwnReviews } from 'redux/reviews/selectors';
import { addReview, updateReview } from 'redux/reviews/operations';
import { selectUser } from 'redux/auth/selectors';
import { ModalWrap, ModalContent, CloseModalBtn } from './AddFeedbackModal.styled';
import { FeedbackForm } from '../FeedbackForm';
import { FeedbackList } from '../FeedbackList';

export const AddFeedbackModal = ({ onCloseModal }) => {
  const [isEditReview, setIsEditReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [id, setId] = useState();
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCloseModal]);

  const handleCloseModal = () => onCloseModal();

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onCloseModal();
  };

  const dispatch = useDispatch();

  const reviews = useSelector(selectOwnReviews);
  const user = useSelector(selectUser);
  console.log('user', user)

  const onEditReview = (id, rating, message) => {
    setIsEditReview(true);
    setId(id);
    setRating(rating);
    setMessage(message);
  };   
  
  const handleUpdateReview = (id, rating, message, isEditReview) => {
    if (isEditReview) {
      console.log('isEditReview', isEditReview)
        dispatch(updateReview({ id: id, review: { "stars": rating, "comment": message } }));
    } else {
      dispatch(addReview({ "stars": rating, "comment": message }));
    }
    setIsEditReview(false);
  }
  
  return (
      <ModalWrap onClick={handleBackdropClick}>
      <ModalContent>
        <CloseModalBtn type='button' onClick={ handleCloseModal } />
        <FeedbackForm isEditReview={isEditReview} editedRating={rating} editedMessage={message} editedId={id} handleUpdateReview={handleUpdateReview} />
        <FeedbackList onEditReview={onEditReview} reviews={reviews} isEditReview={ isEditReview} />
        </ModalContent>
      </ModalWrap>
  );
};