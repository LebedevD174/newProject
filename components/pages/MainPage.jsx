const React = require('react');
const Layout = require('../Layout')

module.exports = function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <title>{title}</title>
      <h1>Главная страница</h1>
    </Layout>

  );
};
