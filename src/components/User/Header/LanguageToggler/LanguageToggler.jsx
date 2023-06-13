import { useTranslation } from 'react-i18next';
import { useGetSearchParams } from 'hooks/useGetSearchParams';
import { GB, UA } from 'country-flag-icons/react/3x2';
import {
  StyledFlagButton,
  StyledLabel,
  StyledTogglerContainer,
} from './LanguageToggler.styled';

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const { setSearchParams } = useGetSearchParams();

  const handleChangeLanguage = e => {
    const { name } = e.currentTarget;
    setSearchParams({ lang: name });
    i18n.changeLanguage(name);
  };

  const currentLanguage = localStorage.getItem('i18nextLng');

  return (
    <StyledTogglerContainer>
      {currentLanguage === 'ua' ? (
        <StyledFlagButton
          type="button"
          onClick={handleChangeLanguage}
          name="en"
        >
          <UA />
          <StyledLabel>UA</StyledLabel>
        </StyledFlagButton>
      ) : (
        <StyledFlagButton
          type="button"
          onClick={handleChangeLanguage}
          name="ua"
        >
          <GB />
          <StyledLabel>EN</StyledLabel>
        </StyledFlagButton>
      )}
    </StyledTogglerContainer>
  );
};
