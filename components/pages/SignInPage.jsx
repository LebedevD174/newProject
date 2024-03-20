const React = require('react');
const Layout = require('../Layout');
const Input = require('../ui/Input');

module.exports = function SignInPage({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <form className="flex column inForm" method="POST">
        <Input type="text" name="login" label="Логин" />
        <Input type="password" name="password" label="Пароль" />
        <button type="submit" className="btn sub_btn flex">Войти</button>
      </form>
    </Layout>

  );
};
