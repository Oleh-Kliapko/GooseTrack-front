import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  FeedbackFormWrap,
  FeedbackFormLabel,
  RatingStarWrap,
  StarInput,
  TextInput,
  BtnSave,
} from './FeedbackForm.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';
import { addReview, fetchOwnReviews, updateReview } from 'redux/reviews/operations';
import { notification, useNotification } from 'helpers';


export const FeedbackForm = ({ isEditReview, editedRating, editedMessage, onCloseModal }) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(editedRating || 0);
  const [message, setMessage] = useState(editedMessage || '');
  const [hover, setHover] = useState(null);

  const toast = useNotification();

  useEffect(() => {
    dispatch(fetchOwnReviews())
  }, [dispatch]);

  useEffect(() => {
    setRating(editedRating);
    setMessage(editedMessage);
  }, [editedMessage, editedRating, isEditReview]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.currentTarget.message.value;
    if (isEditReview) {
      const data = await dispatch(updateReview({ id:isEditReview.id, review: { 'stars': rating, 'comment': message } }));
      if (data.error) {
        notification(toast, 'fail', 'review must have more than 6 characters');
      } else {
        notification(toast, 'success', 'Congratulations. Your request has been sent');

        dispatch(fetchOwnReviews());
        reset();
      }
      //onCloseModal();

    } else{
      const res = await dispatch(addReview({ 'stars': rating, 'comment': message }));
      if (res.error) {
        notification(toast, 'fail', 'review must have more than 6 characters');

      } else {
        notification(toast, 'success', 'Congratulations. Your request has been sent');

        dispatch(fetchOwnReviews());
        reset();
      }
      //onCloseModal();
    }
  };

  return (
    <FeedbackFormWrap onSubmit={handleSubmit}>
      <FeedbackFormLabel>Rating</FeedbackFormLabel>
      <RatingStarWrap>
        {[...Array(5)].map((star, i) => {
          const ratingValue = 5 - i;
          return (
            <label key={i}>
              <StarInput
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <StarIcon
                fill={ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'}
                width={24}
                height={24}
                style={{ marginRight: 1 }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </RatingStarWrap>
      <FeedbackFormLabel htmlFor='FBId'>Review</FeedbackFormLabel>
      <TextInput
        type='text'
        required
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        id='FBId'
        name='message'
        placeholder='Enter your text ...' />
      <BtnSave type='submit'>{isEditReview ? 'Edit' : 'Save'}</BtnSave>
    </FeedbackFormWrap>
  );
};
