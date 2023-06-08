import { CgLogIn } from 'react-icons/cg';
import { AuthLink } from 'utils/Buttons/MainButton.styled';
import {
  AuthWrapper,
  GoogleLink,
  GoogleLinkImg,
  GoogleLinkText,
  GoogleText,
  GoogleWrapper,
  Wrapper,
} from './AuthNav.styled';
import { ReactComponent as Google } from 'images/svg/google.svg';

export const AuthNav = () => {
  return (
    <Wrapper>
      <AuthWrapper>
        <AuthLink to={'/register'}>Sign up</AuthLink>
        <AuthLink to={'/login'} color="blue" colorbtn="white">
          Log in
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </AuthLink>
      </AuthWrapper>
      <GoogleWrapper>
        <GoogleText>Or</GoogleText>
        <GoogleLink href="#">
          <GoogleLinkImg>
            <Google />
          </GoogleLinkImg>
          <GoogleLinkText>Sign up with Google</GoogleLinkText>
        </GoogleLink>
      </GoogleWrapper>
    </Wrapper>
  );
};
