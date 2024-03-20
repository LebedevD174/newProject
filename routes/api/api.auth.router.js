const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const jwtConfig = require('../../config/jwtConfig');
const generateTokens = require('../../utils/authUtils');

router.post('/sign-up', async (req, res) => {
  try {
    const {
      login, password, name, email,
    } = req.body;
    const user = await User.findOne({ where: { login } });
    if (login === user?.login) { res.json({ message: 'Login уже используется' }); } else {
      const hash = await bcrypt.hash(password, 5);
      await User.create({
        login, password: hash, name, email,
      });
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const {
      login, password,
    } = req.body;
    // console.log(login, password);
    const user = await User.findOne({ where: { login } });
    // console.log(user);
    if (login !== user?.login) { res.json({ message: 'Такого пользователя нет' }); } else {
      const isRight = await bcrypt.compare(password, user.password);
      console.log(isRight);
      if (isRight) {
        res.locals.user = user;
        const { accessToken, refreshToken } = generateTokens({ user: { id: user.id, login: user.login, name: user.name } });
        res
          .cookie(jwtConfig.refresh.type, refreshToken, { maxAge: jwtConfig.refresh.expiresIn, httpOnly: true })
          .cookie(jwtConfig.access.type, accessToken, { maxAge: jwtConfig.access.expiresIn, httpOnly: true });
        res.json({ message: 'success' });
      } else {
        res.json({ message: 'Неверный пароль' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
