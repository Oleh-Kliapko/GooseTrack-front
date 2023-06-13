import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
import { useTheme } from '@emotion/react';

export const Loader = ({ isVisible }) => {
  const themeColors = useTheme().colors;

  if (isVisible) {
    return (
      <Wrapper>
        <ColorRing colors={themeColors.loaderCircle} />
      </Wrapper>
    );
  }
};
