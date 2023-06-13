import {
  GoogleLink,
  GoogleLinkImg,
  GoogleLinkText,
  GoogleText,
  GoogleWrapper,
} from './AuthNav.styled';
import { ReactComponent as Google } from 'images/svg/google.svg';
import { useTranslation } from 'react-i18next';

export const AuthGoogle = ({ color }) => {
  const { t } = useTranslation();
  const handleAuth = async () => {
    window.location.href =
      'https://calendar-server-g3h0.onrender.com/api/users/google';
  };

  return (
    <GoogleWrapper>
      <GoogleText color={color}>{t(`homePage.Or`)}</GoogleText>
      <GoogleLink onClick={handleAuth}>
        <GoogleLinkImg>
          <Google />
        </GoogleLinkImg>
        <GoogleLinkText>{t(`homePage.Continue with Google`)}</GoogleLinkText>
      </GoogleLink>
    </GoogleWrapper>
  );
};
