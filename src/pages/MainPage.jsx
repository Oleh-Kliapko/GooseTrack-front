import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { authGoogle } from 'redux/auth/operations';
import { Header, Description, ReviewsSlider } from 'components/Main';
import { MainWrapper } from './MainPage.styled';

const MainPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    dispatch(authGoogle(token));
  }, [location.search, dispatch]);

  return (
    <>
      <Header />
      <MainWrapper>
        <Description />
        <ReviewsSlider />
      </MainWrapper>
    </>
  );
};

export default MainPage;
