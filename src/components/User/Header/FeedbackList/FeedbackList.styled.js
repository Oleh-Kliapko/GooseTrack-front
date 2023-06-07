import styled from '@emotion/styled';
import { ReactComponent as Star } from '../../../../images/svg/rating-star.svg';
import { ReactComponent as Pencil } from '../../../../images/svg/pencil.svg';
import { ReactComponent as Trash } from '../../../../images/svg/trash.svg';

export const FeedbackListWraper = styled.div`
  width: 404px;
  height: 292px;
  padding: 16px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.reviewsBackBlue};
  overflow-y: scroll;
`;

export const FeedbackItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1.8px solid ${({ theme }) => theme.colors.accent};
`;

export const FBInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-family: 'Inter';
  font-style: normal;
`;

export const FBName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.13;
  color: #343434;
  margin-bottom: 8px;
`;

export const FBRating = styled.div``;

export const RatingStar = styled(Star)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  fill: ${({ theme }) => theme.colors.starActive};
  stroke: ${({ theme }) => theme.colors.starActive};
`;

export const GreyStar = styled(Star)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  fill: ${({ theme }) => theme.colors.starDisable};
  stroke: ${({ theme }) => theme.colors.starDisable};
`;

export const FBText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  max-height: 70px;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const EditBlock = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const EditBtn = styled.button`
  width: 164px;
  height: 14px;
  cursor: pointer;
  margin-right: 10px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const TrashBtn = styled.button`
  width: 164px;
  height: 14px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const PencilIcon = styled(Pencil)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

export const TrashIcon = styled(Trash)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  :hover {
    stroke: red;
  }
`;

export const NoReview = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #cec9c1;
`;
