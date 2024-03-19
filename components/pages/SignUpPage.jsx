const React = require('react');
const Layout = require('../Layout');
const Input = require('../ui/Input');

module.exports = function SignUpPage({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <form className="flex column upForm" method="POST">
        <Input type="text" name="login" label="Логин" />
        <Input type="password" name="password" label="Пароль" />
        <Input type="text" name="name" label="Имя" />
        <Input type="email" name="email" label="e-mail" />
        <button type="submit" className="btn sub_btn flex">Отправить</button>
      </form>
    </Layout>

  );
};
