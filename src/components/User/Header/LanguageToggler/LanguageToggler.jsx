import { useTranslation } from 'react-i18next';
import { useGetSearchParams } from 'hooks/useGetSearchParams';
import {
  StyledFlagButton,
  StyledLabel,
  StyledTogglerContainer,
} from './LanguageToggler.styled';
import { ReactComponent as UA } from 'images/svg/ua.svg';
import { ReactComponent as EN } from 'images/svg/en.svg';

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
          <EN />
          <StyledLabel>EN</StyledLabel>
        </StyledFlagButton>
      )}
    </StyledTogglerContainer>
  );
};
