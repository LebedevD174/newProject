require('@babel/register');
const path = require('path');
const express = require('express');
// const cookieParser = require('cookie-parser');
const indexRoute = require('./routes/index.route');
const ssr = require('./middleware/ssr');
// const verifyJWT = require('./middleware/verifyJWT');

const app = express();

const PORT = process.env.PORT ?? 3000;

// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(ssr);
// app.use(verifyJWT)
app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Сервер работает, порт', PORT);
});
