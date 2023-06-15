import { CgLogIn } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

import { AuthLink } from 'utils/Buttons/MainButton.styled';
import { AuthWrapper, Wrapper } from './AuthNav.styled';
import { AuthGoogle } from './BtnGoogle';

export const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <AuthWrapper>
        <AuthLink to={'/register'}>{t(`homePage.Sign up`)}</AuthLink>
        <AuthLink to={'/login'} color="blue" colorbtn="white">
          {t(`homePage.Log In`)}
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </AuthLink>
      </AuthWrapper>
      <AuthGoogle color="white" />
    </Wrapper>
  );
};
