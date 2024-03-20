const router = require('express').Router();
const SignUpPage = require('../../components/pages/SignUpPage');
const SignInPage = require('../../components/pages/SignInPage');
const apiAuth = require('../api/api.auth.router');

router.get('/sign-up', async (req, res) => {
  const html = res.renderComponent(SignUpPage, {
    title: 'Регистрация',
  });
  res.send(html);
});

router.get('/sign-in', async (req, res) => {
  const html = res.renderComponent(SignInPage, {
    title: 'Авторизация',
  });
  res.send(html);
});

router.use('/api', apiAuth);

module.exports = router;
