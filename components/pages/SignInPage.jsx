const React = require('react');
const Layout = require('../Layout');
const Input = require('../ui/Input');

module.exports = function SignIn({ title }) {
  return (
    <Layout title={title}>
      <form className="inForm" method="POST">
       <Input type={'text'} content={'login'} label={'Логин'}></Input>
       <Input type={'password'} content={'password'} label={'Пароль'}></Input>
       <button type='submit' className='btn'>Войти</button>
      </form>
    </Layout>
  );
};

