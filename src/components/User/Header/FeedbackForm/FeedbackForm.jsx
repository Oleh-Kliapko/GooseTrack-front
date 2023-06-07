import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FeedbackFormWrap, FeedbackFormLabel, RatingStarWrap, StarInput, TextInput, BtnSave } from './FeedbackForm.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';


export const FeedbackForm = ({isEditReview, editedRating, editedMessage, editedId, handleUpdateReview}) => {

  const [message, setMessage] = useState("");
  const [star, setStar] = useState();
  const [id, setId] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setRating(editedRating);
    setMessage(editedMessage);
    setId(editedId);
  }, [editedMessage, editedRating, editedId]);
  
  const reset = () => {
    setStar("");
    setMessage("");
    setRating(0);
    setHover(null);
  };

  const handleClick = ratingValue => {
    setRating(ratingValue);
    setStar(ratingValue);
  };   

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.currentTarget.message.value;
    handleUpdateReview(id, rating, message, isEditReview)
    reset();
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
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <StarIcon
              fill={ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'}
              width={24}
              height={24}
              style={{marginRight: 1}}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
        </RatingStarWrap>
      <FeedbackFormLabel htmlFor='FBId'>Review</FeedbackFormLabel>
      <TextInput
        type="text"
        required
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        id='FBId'
        name="message"
        placeholder='Enter your text ...' />
       <BtnSave type="submit">{isEditReview ? 'Edit' : 'Save'}</BtnSave>
    </FeedbackFormWrap>
  );
};