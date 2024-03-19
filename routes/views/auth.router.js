const router = require('express').Router();
const { User } = require('../../db/models');
const SignUpPage = require('../../components/pages/SignUpPage');
const apiAuth = require('../api/api.auth.router')

router.get('/sign-up', async (req, res) => {
  const html = res.renderComponent(SignUpPage, {
    title: 'Регистрация',
  });
  res.send(html);
});

router.use('/api', apiAuth)

module.exports = router;
