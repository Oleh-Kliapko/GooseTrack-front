import { RegisterForm } from 'components/Auth';
import { Img, RegisterPageContainer, RegisterPageWrap, StyledNavLink } from './RegisterPage.styled';
import normalImage from 'images/others/desktop/goose-quote1x.png';
import retinaImage from 'images/others/desktop/goose-quote2x.png';
import superRetinaImage from 'images/others/desktop/goose-quote3x.png';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <Img
        src={normalImage}
        srcSet={`${normalImage} 1x, ${retinaImage} 2x, ${superRetinaImage} 3x`}
        alt='Goose wiht tablet'
      />
      <RegisterPageWrap>
        <RegisterForm />
        <StyledNavLink to={'/login'}>Log In</StyledNavLink>
      </RegisterPageWrap>
    </RegisterPageContainer>
  );
};

export default RegisterPage;

