import {
  GoogleLink,
  GoogleLinkImg,
  GoogleLinkText,
  GoogleText,
  GoogleWrapper,
} from './AuthNav.styled';
import { ReactComponent as Google } from 'images/svg/google.svg';

export const AuthGoogle = ({ color }) => {
  const handleAuth = async () => {
    window.location.href =
      'https://calendar-server-g3h0.onrender.com/api/users/google';
  };

  return (
    <GoogleWrapper>
      <GoogleText color={color}>Or</GoogleText>
      <GoogleLink onClick={handleAuth}>
        <GoogleLinkImg>
          <Google />
        </GoogleLinkImg>
        <GoogleLinkText>Sign with Google</GoogleLinkText>
      </GoogleLink>
    </GoogleWrapper>
  );
};
