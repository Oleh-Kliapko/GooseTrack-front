import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addReview, fetchOwnReviews, updateReview } from 'redux/reviews/operations';
import { notification, useNotification } from 'helpers';
import {
  FeedbackFormWrap,
  FeedbackFormLabel,
  RatingStarWrap,
  StarInput,
  TextInput,
  BtnSave,
  BtnWrap,
  StarIcon
} from './FeedbackForm.styled';
import { SecondBtn, CancelBtn } from 'utils/Buttons/MainButton.styled';


export const FeedbackForm = ({ isEditReview, editedRating, editedMessage, editedId, handleEditReview }) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(editedRating || 0);
  const [message, setMessage] = useState(editedMessage || '');
  const [hover, setHover] = useState(null);
  const [id, setId] = useState('');

  const { t } = useTranslation();

  const toast = useNotification();

  useEffect(() => {
    if (isEditReview) {
      setRating(editedRating);
      setMessage(editedMessage);
      setId(editedId)
    }
  }, [editedMessage, editedRating, editedId, isEditReview]);
  
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentMessage = event.currentTarget.message.value;
    if (!rating) {
      notification(toast, 'fail', t(`notifications.Rating Empty`));
      return;
    }
    if (message.length <= 6) {
      notification(toast, 'fail', t(`notifications.More characters`));
      return;
    }
    if (isEditReview) {
      if (editedMessage === currentMessage && editedRating === rating) {
        notification(toast, 'fail', t(`notifications.Make changes`));
      return;
      }
      const data = await dispatch(updateReview({ id: id, review: { 'stars': rating, 'comment': currentMessage } }));
      notification(toast, 'success', t(`notifications.Congratulations`));    
      await dispatch(fetchOwnReviews());
      reset();

    } else{
      const res = await dispatch(addReview({ 'stars': rating, 'comment': currentMessage }));
      notification(toast, 'success', t(`notifications.Congratulations`));
      await dispatch(fetchOwnReviews());
       reset();
    }
    handleEditReview();
  };

  return (
    <FeedbackFormWrap onSubmit={handleSubmit}>
      <FeedbackFormLabel>{t(`feedback.Rating`)}</FeedbackFormLabel>
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
      <FeedbackFormLabel htmlFor='FBId'>{t(`feedback.Review`)}</FeedbackFormLabel>
      <TextInput
        type='text'
        required
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        id='FBId'
        name='message'
        placeholder={t(`feedback.Enter your text`)} />
      {isEditReview ? (<BtnWrap><SecondBtn style={{ width: '50%'}}>{t(`feedback.Edit`)}</SecondBtn><CancelBtn btn="cancel" style={{ width: '50%'}} onClick={() => { handleEditReview(); reset()}}>{t(`feedback.Cancel`)}</CancelBtn></BtnWrap>) : <BtnSave type='submit'>{t(`feedback.Save`)}</BtnSave>}
    </FeedbackFormWrap>
  );
};