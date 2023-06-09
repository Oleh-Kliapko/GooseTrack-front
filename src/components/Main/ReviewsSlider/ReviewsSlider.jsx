import {
  AuthorPhoto,
  AuthorRating,
  AuthorReview,
  AuthorTitle,
  AuthorTop,
  AuthorTopRight,
  ReviewsItem,
  ReviewsTitle,
  SliderWrapper,
  Wrapper,
  UserIcon,
  SwiperButton,
} from './ReviewsSlider.styled';
import { ReactComponent as Star } from 'images/svg/rating-star.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { fetchReviews } from 'redux/reviews/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReviews } from 'redux/reviews/selectors';
import { FaUser } from 'react-icons/fa';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';

export const ReviewsSlider = () => {
  const dispatch = useDispatch();

  const allReviews = useSelector(selectAllReviews);
  const reviews = allReviews.slice(0, 10);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <Wrapper>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper
        initialSlide={1}
        slidesPerView={1}
        modules={[Navigation, Keyboard, EffectCoverflow]}
        direction={'horizontal'}
        loop={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          prevEl: '#my-prev-button',
          nextEl: '#my-next-button',
        }}
        breakpoints={{
          1440: {
            slidesPerView: 2,
          },
        }}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 10,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {reviews?.map(review => {
          const { _id, avatarURL, username, stars, comment } = review;
          return (
            <SwiperSlide key={_id}>
              <ReviewsItem>
                <AuthorTop>
                  {avatarURL ? (
                    <AuthorPhoto
                      src={avatarURL || ''}
                      alt={username || 'Guest'}
                    ></AuthorPhoto>
                  ) : (
                    <UserIcon>
                      <FaUser size="30" color="white" />
                    </UserIcon>
                  )}

                  <AuthorTopRight>
                    <AuthorTitle>{username || 'Guest'}</AuthorTitle>
                    <AuthorRating>
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          width={14}
                          height={14}
                          fill={index < stars ? '#FFAC33' : '#CEC9C1'}
                        />
                      ))}
                    </AuthorRating>
                  </AuthorTopRight>
                </AuthorTop>
                <AuthorReview>{comment}</AuthorReview>
              </ReviewsItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderWrapper>
        <SwiperButton id="my-prev-button">
          <CgArrowLongLeft size={50} color="#3E85F3" />
        </SwiperButton>
        <SwiperButton id="my-next-button">
          <CgArrowLongRight size={50} color="#3E85F3" />
        </SwiperButton>
      </SliderWrapper>
    </Wrapper>
  );
};
