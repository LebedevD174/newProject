const router = require('express').Router();
const mainRouter = require('./views/main.router');
const prodRouter = require('./views/products.router');
const catRouter = require('./views/categories.router');
const authRouter = require('./views/auth.router');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/products', prodRouter);
router.use('/category', catRouter);

module.exports = router;

