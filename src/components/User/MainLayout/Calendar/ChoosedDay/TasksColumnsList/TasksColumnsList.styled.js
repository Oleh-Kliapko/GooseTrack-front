import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TasksColumnsListWrapper = styled.div`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: row;
  gap: 27px;
  //position: relative;
`;

export const LeftBtn = styled.div`
  position: relative;
  top: 60px;
  @media ${device.tabletBefore} {
    position: absolute;
    top: 105px;
    left: 17%;
  }
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
  position: relative;
  top: 60px;

  @media ${device.tabletBefore} {
    position: absolute;
    top: 105px;
    right: 25%;
  }
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

export const SliderButtons = styled.div`
  position: absolute;
  width: 80px;
  top: 100px;
  left: 120px;
  display: flex;
`;