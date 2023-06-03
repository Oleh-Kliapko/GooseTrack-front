import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import { themes } from '../styles/themes';

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 368px;
    height: 521px;
    position: absolute;
    right: 60px;
    bottom: 19px;
  }
`;
