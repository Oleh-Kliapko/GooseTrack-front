import {
  StyledControl,
  StyledIndicatorContainer,
  StyledOption,
  StyledSelect,
} from './LanguageToggler.styled';
import { GB, UA } from 'country-flag-icons/react/3x2';

export const LanguageToggler = () => {
  const options = [
    { value: 'en', label: <GB /> },
    { value: 'ua', label: <UA /> },
  ];

  return (
    <StyledSelect
      options={options}
      defaultValue={{ value: 'en', label: <GB /> }}
      components={{
        Control: StyledControl,
        Option: StyledOption,
        IndicatorsContainer: StyledIndicatorContainer,
      }}
    />
  );
};
