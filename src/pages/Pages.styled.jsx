import styled from '@emotion/styled';
import { device } from '../styles/mediaVeriables';

export const ContainerAccount = styled.div`
  width: 100%;
  padding: 95px 20px 40px;

  @media ${device.tablet} {
    padding: 64px 32px 38px;
  }

  @media ${device.desktop} {
    padding: 32px;
  }
`;
