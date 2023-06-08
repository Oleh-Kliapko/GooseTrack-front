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
  UserIcon,
} from './ReviewsSlider.styled';
import { ReactComponent as Star } from 'images/svg/rating-star.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'redux/reviews/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReviews } from 'redux/reviews/selectors';
import { fetchUserById } from 'redux/auth/operations';
import { FaUser } from 'react-icons/fa';

export const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const [authorMap, setAuthorMap] = useState(null);
  const [hasLoadedEnoughReviews, setHasLoadedEnoughReviews] = useState(false);

  const allReviews = useSelector(selectAllReviews);
  const reviews = allReviews.slice(0, 10);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const uniqueAuthorIds = [...new Set(reviews.map(review => review.owner))];
      const authorPromises = uniqueAuthorIds.map(idUser =>
        dispatch(fetchUserById(idUser))
      );

      try {
        const authorResponses = await Promise.all(authorPromises);
        const updatedAuthorMap = {};

        authorResponses.forEach((response, index) => {
          const { payload } = response;
          const idUser = uniqueAuthorIds[index];
          updatedAuthorMap[idUser] = payload;
        });

        setAuthorMap(updatedAuthorMap);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (reviews.length > 0 && !hasLoadedEnoughReviews) {
      fetchAuthors();
      setHasLoadedEnoughReviews(true);
    }
  }, [dispatch, reviews, hasLoadedEnoughReviews]);

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
          const author = authorMap && authorMap[review.owner];
          return (
            <SwiperSlide key={review._id}>
              <ReviewsItem>
                <AuthorTop>
                  {author?.avatarURL ? (
                    <AuthorPhoto
                      src={author?.avatarURL || ''}
                      alt={author?.username || 'Guest'}
                    ></AuthorPhoto>
                  ) : (
                    <UserIcon>
                      <FaUser size="30" color="white" />
                    </UserIcon>
                  )}

                  <AuthorTopRight>
                    <AuthorTitle>{author?.username || 'Guest'}</AuthorTitle>
                    <AuthorRating>
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          width={14}
                          height={14}
                          fill={index < review.stars ? '#FFAC33' : '#CEC9C1'}
                        />
                      ))}
                    </AuthorRating>
                  </AuthorTopRight>
                </AuthorTop>
                <AuthorReview>{review.comment}</AuthorReview>
              </ReviewsItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderWrapper>
        <SliderLeft id="my-prev-button" />
        <SliderRight id="my-next-button" />
      </SliderWrapper>
    </Wrapper>
  );
};
