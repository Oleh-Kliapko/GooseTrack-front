import styled from '@emotion/styled';

import { ReactComponent as Left } from 'images/svg/slider-left.svg';
import { ReactComponent as Right } from 'images/svg/slider-right.svg';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(7, '0');
}

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;
  max-width: 375px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-inline: 94px;
    max-width: 768px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-inline: 128px;
    max-width: 1440px;
  }
`;

export const ReviewsTitle = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const ReviewsItem = styled.div`
  box-sizing: border-box;
  padding: 24px;
  max-width: 335px;
  height: 194px;

  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;

  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(-127.05 1.5999999999999979) rotate(-6.350000000000001 1409 581) scale(0.8982089999999999)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='translate(-175.5 102) rotate(6.1 800 450) scale(1.002352)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(13.400000000000006 -85.5) rotate(36.5 401 736) scale(1.002352)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(612 8.2) rotate(-2.05 150 345) scale(0.9934029999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='translate(-138.5 -279.5) rotate(14.400000000000006 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-337.6 86.4) rotate(2.400000000000002 1400 132) scale(0.755)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 32px 32px 50px;
    max-width: 580px;
    height: 187px;
  }
`;

export const AuthorTop = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 18px;
  }
`;

export const AuthorTopRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const AuthorPhoto = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: ${getRandomHexColor};
`;

export const AuthorTitle = styled.h4`
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.black};
`;

export const AuthorRating = styled.div`
  display: flex;
  gap: 10px;
`;

export const AuthorReview = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-left: 68px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const SliderLeft = styled(Left)`
  display: block;
  width: 50px;
  height: 50px;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0, 0.11, 0.35, 2);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 61px;
    height: 61px;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const SliderRight = styled(Right)`
  display: block;
  width: 50px;
  height: 50px;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0, 0.11, 0.35, 2);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 61px;
    height: 61px;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
