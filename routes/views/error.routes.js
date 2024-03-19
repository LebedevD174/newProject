const router = require('express').Router();
const errorPage = require('../../components/pages/Error404');

router.get('/', (req, res) => {
  const html = res.renderComponent(errorPage, {
    title: '404 page not found',
  });
  res.send(html);
});

module.exports = router;
