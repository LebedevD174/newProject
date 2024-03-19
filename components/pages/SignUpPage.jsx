const React = require('react');
const Layout = require('../Layout');
const Input = require('../ui/Input');

module.exports = function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form className="upForm" method="POST">
        <Input type="text" content="login" label="Логин" />
        <Input type="password" content="password" label="Пароль" />
        <Input type="text" content="name" label="Имя" />
        <Input type="text" content="e-mail" label="e-mail" />
        <button type="submit" className="btn">Регистрация</button>
      </form>
    </Layout>
  );
};
