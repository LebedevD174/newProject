const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
  try {
    const {
      login, password, name, email,
    } = req.body;
    //   console.log(login, password, name, email);
    const user = await User.findOne({ where: { login } });
    if (login === user.login) { res.json({ message: 'Login уже используется' }); } else {
      const hash = await bcrypt.hash(password, 5);
      await User.create({
        login, password: hash, name, email,
      });
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
