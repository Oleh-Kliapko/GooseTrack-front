import styled from 'styled-components';
import Select, { components } from 'react-select';
import { device } from 'styles/mediaVeriables';

export const StyledSelect = styled(Select)`
  margin-right: 8px;
  width: 50px;

  @media screen and (min-width: 450px) {
    width: 80px !important;
  }

  @media ${device.tablet} {
    margin-right: 24px;
  }
`;

export const StyledControl = styled(components.Control)`
  cursor: pointer !important;
  min-height: 0px !important;
  height: 32px;
  border-radius: 10px !important;
  border-color: rgba(62, 133, 243, 0.3) !important;
  background-color: transparent !important;

  @media ${device.tablet} {
    min-height: 42px !important;
  }
`;

export const StyledIndicatorContainer = styled(components.IndicatorsContainer)`
  display: none !important;

  @media screen and (min-width: 450px) {
    display: flex !important;
  }
`;

export const StyledOption = styled(components.Option)``;
