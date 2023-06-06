import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { LoginForm } from 'components/Auth';
import normalImage from 'images/others/desktop/rocket1x.png';
import retinaImage from 'images/others/desktop/rocket2x.png';
import superRetinaImage from 'images/others/desktop/rocket3x.png';
import { Img} from './LoginPage.styled';
import { RegisterPageContainer, RegisterPageWrap, StyledNavLink } from './RegisterPage.styled';
import { selectIsLoggedInUser } from 'redux/auth/selectors';

const LoginPage = () => {
  const isLoggedInUser = useSelector(selectIsLoggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedInUser) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10);
      navigate(`/calendar/month/${formattedDate}`);
    }
  }, [isLoggedInUser, navigate]);

  return (
    <RegisterPageContainer>
      <Img
        src={normalImage}
        srcSet={`${normalImage} 1x, ${retinaImage} 2x, ${superRetinaImage} 3x`}
        alt='Goose in rocket'
      />
      <RegisterPageWrap>
        <LoginForm />
        <StyledNavLink to={'/register'}>Sign Up</StyledNavLink>
      </RegisterPageWrap>
    </RegisterPageContainer>
  );
};

export default LoginPage;
