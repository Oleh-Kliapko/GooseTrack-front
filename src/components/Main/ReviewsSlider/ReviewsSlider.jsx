import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
import { selectAllReviews } from 'redux/reviews/selectors';

export const ReviewsSlider = () => {
  const allReviews = useSelector(selectAllReviews);
  const [reviews, setReviews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (allReviews.length > 0) {
      setReviews(allReviews);
    }
  }, [allReviews]);

  return (
    <Wrapper>
      <ReviewsTitle>{t(`homePage.Reviews`)}</ReviewsTitle>
      <Swiper
        initialSlide={1}
        slidesPerView={1}
        modules={[Navigation, Keyboard, EffectCoverflow, Autoplay]}
        direction={'horizontal'}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
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
                <AuthorReview>
                  {comment.length > 150
                    ? `${comment.slice(0, 150)}...`
                    : comment}
                </AuthorReview>
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
