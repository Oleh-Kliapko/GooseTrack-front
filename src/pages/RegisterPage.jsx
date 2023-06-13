import { useTranslation } from 'react-i18next';

import { RegisterForm } from 'components/Auth';
import { AuthGoogle } from 'components/Main';
import {
  Img,
  RegisterPageContainer,
  RegisterPageWrap,
  StyledNavLink,
  NavWrap,
} from './RegisterPage.styled';
import normalImage from 'images/others/desktop/goose-quote1x.png';
import retinaImage from 'images/others/desktop/goose-quote2x.png';
import superRetinaImage from 'images/others/desktop/goose-quote3x.png';

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <RegisterPageContainer>
      <Img
        src={normalImage}
        srcSet={`${normalImage} 1x, ${retinaImage} 2x, ${superRetinaImage} 3x`}
        alt="Goose wiht tablet"
      />
      <RegisterPageWrap>
        <RegisterForm />
        <NavWrap>
          <StyledNavLink to={'/login'}>{t(`sign.Log In`)}</StyledNavLink>
          <AuthGoogle color="#3E85F3" />
        </NavWrap>
      </RegisterPageWrap>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
