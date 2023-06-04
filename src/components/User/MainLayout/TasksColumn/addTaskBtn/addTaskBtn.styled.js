import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding-top: 16px;
  padding-bottom: 16px;
  isolation: isolate;
  width: 100%;
  height: 48px;

  background-color: #e3f3ff;
  border: 1px dashed #3e85f3;
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: #2b78ef;
  }
`;

export const AddTask = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  color: #111111;
`;

export const Plus = styled(AddTask)`
  margin-bottom: 4px;

  font-weight: 300;
  font-size: 32px;
`;
