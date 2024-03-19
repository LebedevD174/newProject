const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');

router.get('/', (req, res) => {
  const html = res.renderComponent(MainPage, {
    title: 'Виктор',
  });
  res.send(html);
});

module.exports = router;
