const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="flex navbar">
      <a href="/">Главная</a>
      <a href="/products">Продукты</a>
      <a href="/category">Категории</a>
      {user ? (
        <div>
          <a href={`/orders${user.id}`}>Заказы</a>
          <a href={`/user${user.id}`}>
            Привет,
            {user.name}
          </a>
          <a href="/logout">Выйти</a>
        </div>
      ) : (
        <div>
          <a href="/auth/sign-in">Войти</a>
          <a href="/auth/sign-up">Регистрация</a>
        </div>
      )}
    </div>
  );
};
