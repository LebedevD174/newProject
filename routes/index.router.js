const router = require('express').Router();

// views
const authRouter = require('./views/auth.routes');
const mainRoute = require('./views/main.route');
const errorRoute = require('./views/error.routes');

// api


// router views
router.use('/', mainRoute);
router.use('/auth', authRouter);

// router api


router.use('/*', errorRoute);

module.exports = router;
