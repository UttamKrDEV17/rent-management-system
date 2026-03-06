export const selectAccessToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => !!state.auth.accessToken;