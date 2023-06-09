export const selectIsLoggedInUser = state => state?.auth?.isLoggedIn;
export const selectUser = state => state?.auth;
export const selectIsRefreshingUser = state => state?.auth?.isRefreshing;
export const selectToken = state => state?.auth?.token;
