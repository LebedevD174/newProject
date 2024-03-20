const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const generateTokens = require('../utils/authUtils');

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, 'ACCESS');
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, 'REFRESH');
    const { accessToken, refreshToken } = generateTokens({ user: { id: user.id, login: user.login, name: user.name } });
    res.locals.user = user;
    res
      .cookie(jwtConfig.refresh.type, refreshToken, { maxAge: jwtConfig.refresh.expiresIn, httpOnly: true })
      .cookie(jwtConfig.access.type, accessToken, { maxAge: jwtConfig.access.expiresIn, httpOnly: true });
    next();
  } catch (error) {
    res.clearCookie(jwtConfig.refresh.type);
    res.clearCookie(jwtConfig.access.type);
    next();
  }
}

module.exports = verifyAccessToken;
