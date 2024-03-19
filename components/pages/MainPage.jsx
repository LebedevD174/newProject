const React = require('react');
const Layout = require('../Layout');

module.exports = function MainPage({ title, content, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="mainConteiner">
        <h1 className="text">{content}</h1>
        <div>Добро пожаловать</div>
        {user ? (
          <a className="btnStart" href="/topics">
            Начать квиз
          </a>
        ) : (
          <a className="btnReg" href="/auth/sign-up">Зарегистрируйся!!!!</a>
        )}
      </div>
    </Layout>
  );
};
