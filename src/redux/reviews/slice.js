import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchReviews, addReview, deleteReview, updateReview } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  reviews: [],
  rating:0,
  isLoading: false,
  error: null,
};
export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload;
        state.rating = payload;
      })
      .addCase(fetchReviews.rejected, handleRejected)
      .addCase(addReview.pending, handlePending)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews.push(payload);
        state.rating = payload;
      })
      .addCase(addReview.rejected, handleRejected)
      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const reviewId = state.reviews.findIndex((item) => item.id === payload.id);
        state.reviews.splice(reviewId, 1);
      })
      .addCase(deleteReview.rejected, handleRejected)
      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.rating = payload;
        const reviewId = state.reviews.findIndex((item) => item.id === payload.id);
        state.reviews.splice(reviewId, 1);
      })
      .addCase(updateReview.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.reviews = [];
        state.rating = 0;
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;



//   extraReducers: {
//     [fetchReviews.pending]: handlePending,
//     [fetchReviews.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       state.reviews = payload;
//       state.rating = payload;
//     },
//     [fetchReviews.rejected]: handleRejected,
//
//     [addReview.pending]: handlePending,
//     [addReview.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       state.reviews.push(payload);
//       state.rating = payload;
//     },
//     [addReview.rejected]: handleRejected,
//
//     [deleteReview.pending]: handlePending,
//     [deleteReview.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       const reviewId = state.reviews.findIndex(
//         item => item.id === payload.id,
//       );
//       state.reviews.splice(reviewId, 1);
//     },
//     [deleteReview.rejected]: handleRejected,
//
//     [updateReview.pending]: handlePending,
//     [updateReview.fulfilled]: (state, {payload}) => {
//       state.isLoading = false;
//       state.error = null;
//       state.rating = payload;
//       const reviewId = state.reviews.findIndex(
//         item => item.id === payload.id,
//       );
//       state.reviews.splice(reviewId, 1);
//     },
//     [updateReview.rejected]: handleRejected,
//
//     [logOut.fulfilled]:(state) =>{
//       state.reviews = [];
//       state.rating = 0;
//       state.error = null;
//       state.isLoading = false;
//     },
//   },
// });
//
// export const reviewsReducer = reviewsSlice.reducer;
//
