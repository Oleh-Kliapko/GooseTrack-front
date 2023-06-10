import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 14px 40px;
  border-radius: 8px;
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
`;

export const WeekInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ id, theme }) => {
    switch (id) {
      case 5:
        return theme.colors.accent;
      case 6:
        return theme.colors.hovered;
      default:
        return theme.colors.loaderWrapper;
    }
  }};
  margin: 0px 0px 6px 0px;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateContainer = styled.button`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.m};
  width: 27px;
  border-radius: 8px;
  background-color: ${({ picked, theme }) =>
    picked ? theme.colors.accent : 'transparent'};
  color: ${({ picked, theme }) =>
    picked ? theme.colors.white : theme.colors.loaderWrapper};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;
