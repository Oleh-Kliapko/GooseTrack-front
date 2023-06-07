import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectUser } from 'redux/auth/selectors';
import { selectOwnReviews } from 'redux/reviews/selectors';
import {fetchOwnReviews} from 'redux/reviews/operations';
import {deleteReview} from 'redux/reviews/operations';
import {
  FeedbackListWraper, FeedbackItem, AvatarContainer, FBInfo, FBName, FBRating, FBText, RatingStar, GreyStar,
  PencilIcon, TrashIcon, EditBlock, EditBtn, TrashBtn, NoReview
} from './FeedbackList.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';


export const FeedbackList = ({ onEditReview, isEditReview}) => {
 

  // const reviews = useSelector(selectOwnReviews);


  // useEffect(() => {
  //   dispatch(fetchOwnReviews())
  // }, [dispatch]);


  const [reviews, setReviews] = useState([]);

  const userName = useSelector(selectUser).user.username;
  const dispatch = useDispatch();

  const reviewsOwn = useSelector(selectOwnReviews);
  useEffect(() => {
    setReviews(reviewsOwn);
  }, [reviewsOwn]);

  console.log('reviews===>', reviews);
console.log('reviews0', reviews[0]);
  return (
    <FeedbackListWraper>
      {reviews.length ? (reviews.map(({ _id, stars, comment }) => {

return (
 <FeedbackItem id={_id} key={_id}>
<AvatarContainer></AvatarContainer>
<FBInfo>
 <FBName>{userName}</FBName>
 <FBRating>
 {[...Array(5)].map((star, i) => {
   const ratingValue = 5 - i;
   
return (
   <StarIcon
     key={i}
     fill={ratingValue <= stars ? '#FFAC33' : '#CEC9C1'}
     width={14}
     height={14}
     style={{marginRight: 8}}
   />
);
})}
 </FBRating>
 <FBText>{comment}</FBText>
</FBInfo>
   <EditBlock>
 <EditBtn type='button' onClick={() => {onEditReview(_id, stars, comment)}}><PencilIcon /></EditBtn>
 <TrashBtn type='submit' onClick={()=> dispatch(deleteReview(_id))} ><TrashIcon /></TrashBtn>
</EditBlock>
</FeedbackItem>
)})): <NoReview>You don`t have any reviews yet!</NoReview>}
    </FeedbackListWraper>
  );
};
