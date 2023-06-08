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
import { fetchUserById } from '../../../redux/auth/operations';


export const ReviewsSlider = () => {
  const dispatch = useDispatch();

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [authorMap, setAuthorMap] = useState(null);
  const [hasLoadedEnoughReviews, setHasLoadedEnoughReviews] = useState(false);

  const allReviews = useSelector(selectAllReviews);
  const reviews = allReviews.slice(0, 10);

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

  useEffect(() => {
    const fetchAuthors = async () => {
      const uniqueAuthorIds = [...new Set(reviews.map((review) => review.owner))];
      const authorPromises = uniqueAuthorIds.map((idUser) => dispatch(fetchUserById(idUser)));

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
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: '#my-prev-button',
          nextEl: '#my-next-button',
        }}
        modules={[Navigation]}
        direction={'horizontal'}
        loop={true}
      >
        {reviews?.map((review) => {
          const author = authorMap && authorMap[review.owner];
          console.log(author);
          return (
            <SwiperSlide key={review._id}>
              <ReviewsItem>
                <AuthorTop>
                  <AuthorPhoto src={author?.avatarURL || ''} alt="Olena Doe"></AuthorPhoto>
                  <AuthorTopRight>
                    <AuthorTitle>{author?.username || ''}</AuthorTitle>
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


// export const ReviewsSlider = () => {
//   const dispatch = useDispatch();
//
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [authorMap, setAuthorMap] = useState(null);
//
//   const allReviews = useSelector(selectAllReviews);
//   const reviews = allReviews.slice(0, 10);
//
//   useEffect(() => {
//     dispatch(fetchReviews());
//   }, [dispatch]);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1440) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(1);
//       }
//     };
//
//     window.addEventListener('resize', handleResize);
//     handleResize();
//
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//
//   //========================================== дописала код для отримання інформації до ревю
//   useEffect(() => {
//     const fetchAuthors = async () => {
//       const uniqueAuthorIds = [...new Set(reviews.map((review) => review.owner))];
//       const authorPromises = uniqueAuthorIds.map((idUser) => dispatch(fetchUserById(idUser)));
//
//       try {
//         const authorResponses = await Promise.all(authorPromises);
//         const updatedAuthorMap = {};
//
//         authorResponses.forEach((response, index) => {
//           const { payload } = response;
//           const idUser = uniqueAuthorIds[index];
//           updatedAuthorMap[idUser] = payload;
//         });
//
//         setAuthorMap(updatedAuthorMap);
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     };
//
//     if (reviews.length > 0) {
//       fetchAuthors();
//     }
//   }, [dispatch, reviews]);
//   //=================================================================================кінець
//   return (
//     <Wrapper>
//       <ReviewsTitle>Reviews</ReviewsTitle>
//       <Swiper
//         initialSlide={1}
//         slidesPerView={slidesPerView}
//         navigation={{
//           prevEl: '#my-prev-button',
//           nextEl: '#my-next-button',
//         }}
//         modules={[Navigation]}
//         direction={'horizontal'}
//         loop={true}
//       >
//         {reviews?.map(review => {
//           console.log(review);
//           const author = authorMap && authorMap[review.owner];
//           return (
//             <SwiperSlide key={review._id}>
//               <ReviewsItem>
//                 <AuthorTop>
//                   <AuthorPhoto src={author?.avatarURL || ''} alt="Olena Doe"></AuthorPhoto>
//                   <AuthorTopRight>
//                     <AuthorTitle>{author?.username || ''}</AuthorTitle>
//                     <AuthorRating>
//                       <Star width={14} height={14} fill="#CEC9C1" />
//                       <Star width={14} height={14} fill="#FFAC33" />
//                       <Star width={14} height={14} fill="#FFAC33" />
//                       <Star width={14} height={14} fill="#FFAC33" />
//                       <Star width={14} height={14} fill="#FFAC33" />
//                     </AuthorRating>
//                   </AuthorTopRight>
//                 </AuthorTop>
//                 <AuthorReview>{review.comment}</AuthorReview>
//               </ReviewsItem>
//             </SwiperSlide>
//             )
//         })}
//       </Swiper>
//       <SliderWrapper>
//         <SliderLeft id="my-prev-button" />
//         <SliderRight id="my-next-button" />
//       </SliderWrapper>
//     </Wrapper>
//   );
// };
