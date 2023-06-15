import styled from '@emotion/styled';
import { ReactComponent as Pencil } from '../../../../images/svg/pencil.svg';
import { ReactComponent as Trash } from '../../../../images/svg/trash.svg';

export const FeedbackListWraper = styled.div`
  width: 295px;
  height: 225px;
  padding: 14px 15px 14px 14px;
  margin-top: 28px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.reviewsBackBlue};
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.lineSwitchVertical};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.scrollSwitchVertical};
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 10px 16px 16px;
    width: 404px;
    height: 292px;
  }
`;

export const FeedbackItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 256px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 366px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.textCancelBtn};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const NoAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textCancelBtn};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const FBInfo = styled.div`
  width: 212px;
  margin-bottom: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    width: 314px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const FBName = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const FBRating = styled.div``;

export const FBText = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  max-height: 70px;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FBTextAll = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  border-radius: 2px;
  padding: 7px;
  margin-top: 12px;
  box-shadow: 5px 5px 5px 0px ${({ theme }) =>
    theme.colors.borderInputUserForm};
}

`;

export const EditBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const EditBtn = styled.button`
  width: 14px;
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
  width: 14px;
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
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const TrashIcon = styled(Trash)`
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};

  :hover {
    stroke: red;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const NoReview = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #cec9c1;
`;
