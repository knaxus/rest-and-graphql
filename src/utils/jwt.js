import JWT from 'jsonwebtoken';

const {
  TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO,
  REFRESH_TOKEN_SECRET,
} = process.env;

const accessTokenConfig = {
  expiresIn: ACCESS_TOKEN_EXPIRY,
  algorithm: ACCESS_TOKEN_ALGO,
};

const refreshTokenConfig = {
  expiresIn: REFRESH_TOKEN_EXPIRY,
  algorithm: REFRESH_TOKEN_ALGO,
};

export default {

  createAccessToken(data) {
    JWT.sign(data, TOKEN_SECRET, accessTokenConfig);
  },

  decryptAccessToken(token) {
    JWT.decode(token, TOKEN_SECRET, accessTokenConfig);
  },

  createaRefreshToken(data) {
    JWT.sign(data, REFRESH_TOKEN_SECRET, refreshTokenConfig);
  },

  decryptRefreshToken(token) {
    JWT.decode(token, REFRESH_TOKEN_SECRET, refreshTokenConfig);
  },
};
