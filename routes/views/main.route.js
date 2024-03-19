const router = require('express').Router();
const mainPage = require('../../components/pages/MainPage');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  let userInDb;
  if (user) {
    userInDb = await User.findOne({ where: { id: user.id } });
  }

  const html = res.renderComponent(mainPage, {
    title: 'Главная',
    user: userInDb,
  });
  res.send(html);
});

router.get('/logout', async (req, res) => {
  delete res.locals.user;
  res.redirect('/');
});

module.exports = router;
