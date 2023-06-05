export const selectIsLoggedInUser = state => state?.auth?.isLoggedIn;
export const selectUser = state => state?.auth?.token;
export const selectIsRefreshingUser = state => state?.auth?.isRefreshing;
export const selectIsIsLoadingUser = state => state?.auth?.isLoading;
