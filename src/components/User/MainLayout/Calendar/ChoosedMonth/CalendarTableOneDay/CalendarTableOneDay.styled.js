import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'styles/mediaVeriables';

export const DayContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  position: relative;
  min-height: 94px;
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  border-radius: 8px;
  @media ${device.tablet} {
    min-height: 144px;
  }

  @media ${device.desktop} {
    min-height: 125px;
  }
`;

export const NumberContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  background-color: ${({ picked, theme }) =>
    picked ? theme.colors.accent : 'transparent'};
  border-radius: 8px;
  padding: 4px 8px;

  @media ${device.tablet} {
    top: 18px;
    right: 22px;
  }

  @media ${device.desktop} {
    top: 14px;
    right: 14px;
  }
`;

export const Number = styled.p`
  font-family: 'Inter';
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({ picked, theme }) =>
    picked ? theme.colors.white : theme.colors.loaderWrapper};

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.1;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const OverflowContainer = styled.div`
  width: 100%;
  height: 72px;
  position: absolute;
  top: 48px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  @media ${device.tablet} {
    height: 100px;
    top: 58px;
  }

  @media ${device.desktop} {
    height: 67px;
  }
`;

export const TasksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const TaskButton = styled.button`
  margin: 2px;
  height: 22px;
  padding: 4px 4px 4px 8px;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.micro};
  line-height: 1.4;
  text-align: start;
  border-radius: 8px;
  background-color: ${({ priority, theme }) => {
    switch (priority) {
      case 'low':
        return theme.colors.blueInNotes;
      case 'medium':
        return theme.colors.yellowInNotes;
      case 'high':
        return theme.colors.pinkInNotes;
      default:
        return theme.colors.blueInNotes;
    }
  }};
  //overflow: hidden;
  ::-webkit-scrollbar {
    width: 0;
  }
  color: ${({ priority, theme }) => {
    switch (priority) {
      case 'low':
        return theme.colors.lowTask;
      case 'medium':
        return theme.colors.mediumTask;
      case 'high':
        return theme.colors.highTask;
      default:
        return theme.colors.lowTask;
    }
  }};
  @media ${device.tablet} {
    margin-left: 4px;
    margin-right: 4px;
  }

  @media ${device.desktop} {
    margin-left: 8px;
    margin-right: 8px;
  }
  transform: scale(1);
  transition: ease-in-out 0.7s;
  transition-property: scale;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  :hover {
    scale: 1.1;
  }

  ${({ category }) => {
    if (category === 'done') {
      return 'text-decoration: line-through; text-decoration-color: black;';
    }
  }}
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

export const ButtonText = styled.p`
  white-space: nowrap;
`;

export const ButtonDots = styled.div`
  display: ${({ length }) => {
    if (length < 6) {
      return 'none';
    }
    return 'block';
  }};

  @media ${device.tablet} {
    display: ${({ length }) => {
      if (length < 10) {
        return 'none';
      }
      return 'block';
    }};
  }

  @media ${device.desktop} {
    display: ${({ length }) => {
      if (length < 18) {
        return 'none';
      }
      return 'block';
    }};
  }
`;
