import {
  GoogleLink,
  GoogleLinkImg,
  GoogleLinkText,
  GoogleText,
  GoogleWrapper,
} from './AuthNav.styled';
import { ReactComponent as Google } from 'images/svg/google.svg';

export const AuthGoogle = () => {
  const handleAuth = async () => {
    //   'https://calendar-server-g3h0.onrender.com/api/users/google';
    window.location.href = 'http://localhost:5000/api/users/google';
  };

  return (
    <GoogleWrapper>
      <GoogleText>Or</GoogleText>
      <GoogleLink onClick={handleAuth}>
        <GoogleLinkImg>
          <Google />
        </GoogleLinkImg>
        <GoogleLinkText>Sign with Google</GoogleLinkText>
      </GoogleLink>
    </GoogleWrapper>
  );
};
