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
      const newUser = await User.create({
        login, password: hash, name, email,
      });
      res.locals.user = newUser;
      const { accessToken, refreshToken } = generateTokens({
        user: {
          id: newUser.id,
          login: newUser.login,
          name: newUser.name,
        },
      });
      res
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .cookie(jwtConfig.access.type, accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
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
    const user = await User.findOne({ where: { login } });
    if (login !== user?.login) { res.json({ message: 'Такого пользователя нет' }); } else {
      const isRight = await bcrypt.compare(password, user.password);
      if (isRight) {
        res.locals.user = user;
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            login: user.login,
            name: user.name,
          },
        });
        res
          .cookie(jwtConfig.refresh.type, refreshToken, {
            maxAge: jwtConfig.refresh.expiresIn,
            httpOnly: true,
          })
          .cookie(jwtConfig.access.type, accessToken, {
            maxAge: jwtConfig.access.expiresIn,
            httpOnly: true,
          });
        res.json({ message: 'success' });
      } else {
        res.json({ message: 'Неверный пароль' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie(jwtConfig.refresh.type);
    res.clearCookie(jwtConfig.access.type);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
