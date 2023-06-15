import styled from '@emotion/styled';
import { device } from '../styles/mediaVeriables';

export const ContainerAccount = styled.div`
  width: 100%;
  padding: 71px 20px 40px;
  min-height: calc(100vh - 81px);

  @media ${device.tablet} {
    padding: 40px 32px 38px;
    min-height: calc(100vh - 92px);
  }

  @media ${device.desktop} {
    padding: 16px 32px 32px;
    min-height: calc(100vh - 100px);
  }
`;
