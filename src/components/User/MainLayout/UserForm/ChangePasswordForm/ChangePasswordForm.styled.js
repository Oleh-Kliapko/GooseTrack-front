import styled from '@emotion/styled';
import { Input } from '../../UserField/UserField.styled';

export const StyledModalInput = styled(Input)`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgba(52, 52, 52, 0.8);
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Span = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.authHeading};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 40px;
  justify-content: space-between;
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  flex-grow: 0.73;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: #efefef;
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
  }
`;

export const Button = styled.button`
  flex-grow: 1;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px var(--btn-shadow-color);
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
  }
`;
