import styled from '@emotion/styled';

export const AddTaskBtnStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 304px;
  height: 52px;
  margin: 32px 20px 28px 20px;
  background: #e3f3ff;
  border: 1px dashed #3e85F3;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const AddTaskBtnIconStyled = styled.div``;

export const AddTaskBtnTextStyled = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #000;
`;


export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: none;
  stroke: #000000;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
 `;
