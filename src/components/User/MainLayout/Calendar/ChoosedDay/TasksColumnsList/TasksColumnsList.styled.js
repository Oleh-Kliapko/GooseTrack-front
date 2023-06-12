import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TasksColumnsListWrapper = styled.div`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: row;
  gap: 27px;
`;

export const LeftBtn = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'none';
        case 'middle':
          return 'none';
        case 'right':
          return 'none';
        default:
          return;
      }
  }};
  @media ${device.desktopBefore} {
    display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'none';
        case 'middle':
          return 'block';
        case 'right':
          return 'none';
        default:
          return;
      }
  }};
  }
  @media ${device.tabletBefore} {
    display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'none';
        case 'middle':
          return 'block';
        case 'right':
          return 'block';
        default:
          return;
      }
  }};
  }

`;

export const RightBtn = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'none';
        case 'middle':
          return 'none';
        case 'right':
          return 'none';
        default:
          return;
      }
  }};
  @media ${device.desktopBefore} {
    display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'block';
        case 'middle':
          return 'none';
        case 'right':
          return 'none';
        default:
          return;
      }
  }};
  }
  @media ${device.tabletBefore} {
    display: ${({display})=>{
    switch(display) {
        case 'left':
          return 'block';
        case 'middle':
          return 'block';
        case 'right':
          return 'none';
        default:
          return;
      }
  }};
  }
`;