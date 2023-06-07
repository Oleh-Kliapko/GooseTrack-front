import { RegisterForm } from 'components/Auth';
import { Img, RegisterPageContainer, RegisterPageWrap, StyledNavLink } from './RegisterPage.styled';
import normalImage from 'images/others/desktop/goose-quote1x.png';
import retinaImage from 'images/others/desktop/goose-quote2x.png';
import superRetinaImage from 'images/others/desktop/goose-quote3x.png';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedInUser } from '../redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  // const isLoggedInUser = useSelector(selectIsLoggedInUser);
  // const navigate = useNavigate();
  //
  // useEffect(() => {
  //   if (isLoggedInUser) {
  //     const currentDate = new Date();
  //     const formattedDate = currentDate.toISOString().slice(0, 10);
  //     navigate(`/calendar/month/${formattedDate}`);
  //   }
  // }, [isLoggedInUser, navigate]);

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
