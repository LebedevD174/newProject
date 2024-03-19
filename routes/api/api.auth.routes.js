const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateTokens = require('../../utils/authUtils');
const { User } = require('../../db/models');
const jwtConfig = require('../../config/jwtConfig');

router.post('/sign-up', async (req, res) => {
  let user;
  try {
    const {
      login, password, name, email,
    } = req.body;
    console.log(login);
    user = await User.findOne({ where: { login } });
    if (login) {
      res.json({ message: 'Логин занят' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({
      login, password: hash, name, email,
    });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { login, password } = req.body;

    user = await User.findOne({ where: { login } });
    if (!user) {
      res.json({ message: 'Такого пользователя нет' });
      return;
    }

    const isRight = await bcrypt.compare(password, user.password);
    console.log(isRight);
    if (!isRight) {
      res.json({ message: 'Пароль не совпадает' });
    } else {
      res.locals.user = user;
      const { accessToken, refreshToken } = generateTokens({ user: { id: user.id, email: user.email, name: user.name } });
      res
        .cookie(jwtConfig.refresh.type, refreshToken, { maxAge: jwtConfig.refresh.expiresIn, httpOnly: true })
        .cookie(jwtConfig.access.type, accessToken, { maxAge: jwtConfig.access.expiresIn, httpOnly: true });
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
