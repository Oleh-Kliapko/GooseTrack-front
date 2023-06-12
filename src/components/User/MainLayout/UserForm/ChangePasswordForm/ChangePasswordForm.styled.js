import styled from '@emotion/styled';

export const StyledForm = styled.form`
  min-width: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.loaderWrapper};

  @media screen and (min-width: 375px) {
    width: 267px;
  }
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

export const Span = styled.span`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: black;
`;

export const Input = styled.input`
  height: 42px;
  margin-bottom: 18px;
  padding: 14px;
  width: 100%;
  outline: none;
  background-color: #f7f7f7;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.colors.loaderWrapper};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    height: 46px;
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
  color: ${({ theme }) => theme.colors.textAndIconTodo};
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
