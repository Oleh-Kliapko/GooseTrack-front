// import { TASK_PRIORITY } from './constatns/taskPriority.const';
import styled from '@emotion/styled';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 28px;

//   padding: 14px 15px 18px 14px;
//   width: 100%;

//   background-color: #f7f6f9;
//   border: 1px solid rgba(220, 227, 229, 0.8);
//   border-radius: 8px;

//   /* @media (min-width: 1280px) {
//     min-height: 100px;
//     padding-top: 8px;
//   } */
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   gap: 8px;
// `;

// export const TaskTitle = styled.h4`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.29;
// `;

// export const TaskAvatarWrapper = styled.div`
//   width: 32px;
//   height: 32px;
// `;

// export const TaskPriority = styled.p`
//   padding: 4px 12px;

//   background: var(
//     ${props => {
//       if (props.priority === TASK_PRIORITY.medium) {
//         return '#F3B249';
//       }
//       if (props.priority === TASK_PRIORITY.high) {
//         return '#EA3D65';
//       }
//       return '#72C2F8';
//     }}
//   );


//   border-radius: 4px;

//   font-style: normal;
//   font-weight: 600;
//   font-size: 10px;
//   line-height: 1.2;
//   text-align: center;

//   color: var(--btn-text-color);
// `;


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 108px;

  margin-bottom: ${p => p.themes.space[4]}px;

  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 15px;
  padding-right: 12px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  background-color: rgba(23, 24, 32, 1);

  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(0.98);
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const TaskTitle = styled.div`
  height: 16px;
  cursor: pointer;
  color: rgba(17, 17, 17, 1);
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;

  border: 1.8px solid rgba(62, 133, 243, 1);
  border-radius: 50%;
`;

const PriorityIndicator = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  margin-left: ${p => p.themes.space[3]}px;
  padding: ${p => p.themes.space[2]}px ${p => p.themes.space[4] - 2}px;

  border-radius: 4px;

  color: rgba(247, 246, 249, 1);

  font-family: Inter;
  font-weight: 600;
  font-size: 10px;
  cursor: default;

  text-transform: capitalize;
`;

export const LowPriority = styled(PriorityIndicator)`
  background-color: ${props => props.themes.colors.lowTask};
`;

export const MediumPriority = styled(PriorityIndicator)`
  background-color: ${props => props.theme.colors.mediumTask};
`;

export const HighPriority = styled(PriorityIndicator)`
  background-color: ${props => props.theme.colors.highTask};
`;

export const ToolbarContainer = styled.div``;