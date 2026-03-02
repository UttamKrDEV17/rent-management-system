import ms from "ms";

// config/cookie.js
export const REFRESH_TOKEN_COOKIE_OPTIONS = {
  httpOnly: true,       // not accessible via JS
  secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
  sameSite: 'strict',   // CSRF protection
  maxAge: ms(process.env.REFRESH_TOKEN_EXPIRATION) * 1000,
};