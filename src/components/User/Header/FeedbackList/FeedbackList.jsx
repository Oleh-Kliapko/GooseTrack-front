import { useSelector, useDispatch } from "react-redux";
import {selectUser} from 'redux/auth/selectors';
import {deleteReview} from 'redux/reviews/operations';
import {
  FeedbackListWraper, FeedbackItem, AvatarContainer, FBInfo, FBName, FBRating, FBText,
  PencilIcon, TrashIcon, EditBlock, EditBtn, TrashBtn, NoReview
} from './FeedbackList.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';


export const FeedbackList = ({reviews, onEditReview, isEditReview}) => {
const userName = useSelector(selectUser).user.username;
const dispatch = useDispatch();
  
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
