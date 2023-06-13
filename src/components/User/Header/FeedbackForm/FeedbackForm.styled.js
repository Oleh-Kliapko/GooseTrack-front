import styled from '@emotion/styled';
import { ReactComponent as Star } from '../../../../images/svg/rating-star.svg';

export const FeedbackFormWrap = styled.form`
  width: 404px;
  height: 285px;
`;

export const StarInput = styled.input`
  display: none;
`;

export const FeedbackFormLabel = styled.label`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.labelInForm};
`;

export const RatingStarWrap = styled.div`
  margin-bottom: 24px;
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;
  margin-right: 1px;
  cursor: pointer;
`;

export const GreyStar = styled(Star)`
  width: 24px;
  height: 24px;
  margin-right: 1px;
  fill: ${({ theme }) => theme.colors.starDisable};
  stroke: ${({ theme }) => theme.colors.starDisable};
`;

export const TextInput = styled.textarea`
  padding: 14px 18px;
  width: 404px;
  height: 127px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: none;
  resize: none;
  background-color: ${({ theme }) => theme.colors.backgroundTextArea};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnSave = styled.button`
  position: relative;
  margin-left: auto;
  padding: 0;
  border-radius: 8px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 295px;
  height: 42px;

  @media screen and (min-width: 768px) {
    width: 404px;
    height: 48px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;
