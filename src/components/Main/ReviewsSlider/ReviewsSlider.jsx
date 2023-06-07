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
  SliderLeft,
  SliderRight,
  Wrapper,
} from './ReviewsSlider.styled';
import olena from 'images/others/mobile/review-olena.png';
import { ReactComponent as Star } from 'images/svg/rating-star.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'redux/reviews/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReviews } from 'redux/reviews/selectors';

export const ReviewsSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const reviews = useSelector(selectAllReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper
        initialSlide={1}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: '#my-prev-button',
          nextEl: '#my-next-button',
        }}
        modules={[Navigation]}
        direction={'horizontal'}
        loop={true}
      >
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <ReviewsItem>
              <AuthorTop>
                <AuthorPhoto src={olena} alt="Olena Doe"></AuthorPhoto>
                <AuthorTopRight>
                  <AuthorTitle>Olena Doe</AuthorTitle>
                  <AuthorRating>
                    <Star width={14} height={14} fill="#CEC9C1" />
                    <Star width={14} height={14} fill="#FFAC33" />
                    <Star width={14} height={14} fill="#FFAC33" />
                    <Star width={14} height={14} fill="#FFAC33" />
                    <Star width={14} height={14} fill="#FFAC33" />
                  </AuthorRating>
                </AuthorTopRight>
              </AuthorTop>
              <AuthorReview>{review.comment}</AuthorReview>
            </ReviewsItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderWrapper>
        <SliderLeft id="my-prev-button" />
        <SliderRight id="my-next-button" />
      </SliderWrapper>
    </Wrapper>
  );
};
