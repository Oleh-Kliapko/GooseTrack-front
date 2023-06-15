import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TaskCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 14px 14px 18px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  border-radius: 8px;
`;

export const TaskCardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  margin-bottom: 28px;
  text-align: left;
  @media ${device.tablet} {
    margin-bottom: 30px;
  }
  @media ${device.desktop} {
    margin-bottom: 32px;
  }
`;
export const TaskCardAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1.8px solid ${({ theme }) => theme.colors.accent};
`;
export const TaskCardPriority = styled.p`
  padding: 4px 12px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.micro};
  border-radius: 4px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ priority, theme }) => {
    switch (priority) {
      case 'low':
        return theme.colors.lowTask;
      case 'medium':
        return theme.colors.mediumTask;
      case 'high':
        return theme.colors.highTask;
      default:
        return theme.colors.blueInNotes;
    }
  }};
`;
export const TaskAvatarPriorityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const AvatarLetter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
`;
export const TaskDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const TaskTime = styled.p`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  white-space: nowrap;
`;

export const TopLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
