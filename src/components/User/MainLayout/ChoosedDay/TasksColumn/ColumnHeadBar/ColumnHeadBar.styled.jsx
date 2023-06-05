import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  padding: 7px 0;
`;
export const Title = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px 18px 20px;
  line-height: 1.11;
  color: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border-radius: 50%;
  color: #111111;
  border: 2px solid;
  border-color: #111111;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    color: #2b78ef;
    border-color: #2b78ef;
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;
  stroke: currentColor;
  fill: transparent;
`;
