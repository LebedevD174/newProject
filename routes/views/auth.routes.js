const router = require('express').Router();
const SignUpPage = require('../../components/pages/SignUpPage');
const SignInPage = require('../../components/pages/SignInPage');
const apiAuthRouter = require('../api/api.auth.routes');

// api
router.use('/api', apiAuthRouter);

router.get('/sign-up', (req, res) => {
  const html = res.renderComponent(SignUpPage, { title: 'sign-up' });
  res.send(html);
});

router.get('/sign-in', (req, res) => {
  const html = res.renderComponent(SignInPage, { title: 'sign-in' });
  res.send(html);
});

module.exports = router;
