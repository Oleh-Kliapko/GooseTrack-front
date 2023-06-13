import { useSelector, useDispatch } from 'react-redux';
import { selectOwnReviews } from 'redux/reviews/selectors';
import { deleteReview, fetchOwnReviews } from 'redux/reviews/operations';
import {
  FeedbackListWraper, FeedbackItem, AvatarContainer, FBInfo, FBName, FBRating, FBText,
  PencilIcon, TrashIcon, EditBlock, EditBtn, TrashBtn, NoReview, AvatarPhoto
} from './FeedbackList.styled';
import { ReactComponent as StarIcon } from '../../../../images/svg/rating-star.svg';

export const FeedbackList = ({ onEditReview }) => {
  const dispatch = useDispatch();
  const reviewsOwn = useSelector(selectOwnReviews);

  const handleDeleteReview = async id => {
    try {
      await dispatch(deleteReview(id));
      dispatch(fetchOwnReviews());
    } catch (err) {
    }
  };
  return (
    <FeedbackListWraper>
      {reviewsOwn?.length ? (
        reviewsOwn.map(({ _id, stars, comment, username, avatarURL}) => {
          // const avatarName = username.trim().slice(0, 1).toUpperCase();
          return (
            <FeedbackItem id={_id} key={_id}>
              {/* <AvatarContainer>{avatarName}</AvatarContainer> */}
              <AvatarContainer >
               <AvatarPhoto src={avatarURL} alt='Avatar' />
              </AvatarContainer>
              <FBInfo>
                <FBName>{username}</FBName>
                <FBRating>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = 5 - i;
                    return (
                      <StarIcon
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
