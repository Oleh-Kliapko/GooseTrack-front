import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectUser } from 'redux/auth/selectors';
import { selectOwnReviews } from 'redux/reviews/selectors';
import { deleteReview, fetchOwnReviews } from 'redux/reviews/operations';
import {
  FeedbackListWraper, FeedbackItem, AvatarContainer, FBInfo, FBName, FBRating, FBText,
  PencilIcon, TrashIcon, EditBlock, EditBtn, TrashBtn, NoReview,
} from './FeedbackList.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';

export const FeedbackList = ({ onEditReview }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).user.username;
  const reviewsOwn = useSelector(selectOwnReviews);
  useEffect(() => {
    dispatch(fetchOwnReviews());
  }, [dispatch]);

  const handleDeleteReview = async id => {
    try {
      await dispatch(deleteReview(id));
      dispatch(fetchOwnReviews());
    } catch (err) {
      // console.log(‘err===>‘, err);
    }
  };
  return (
    <FeedbackListWraper>
      {reviewsOwn?.length ? (
        reviewsOwn.map(({ _id, stars, comment }) => {
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
                        fill={ratingValue <= stars ? `#FFAC33` : `#CEC9C1`}
                        width={14}
                        height={14}
                        style={{ marginRight: 8 }}
                      />
                    );
                  })}
                </FBRating>
                <FBText>{comment}</FBText>
              </FBInfo>
              <EditBlock>
                <EditBtn
                  type='button'
                  onClick={() => {
                    onEditReview(_id, stars, comment);
                  }}
                >
                  <PencilIcon />
                </EditBtn>
                <TrashBtn type='submit' onClick={() => handleDeleteReview(_id)}>
                  <TrashIcon />
                </TrashBtn>
              </EditBlock>
            </FeedbackItem>
          );
        })
      ) : (
        <NoReview>You don`t have any reviews yet!</NoReview>
      )}
    </FeedbackListWraper>
  );
};
