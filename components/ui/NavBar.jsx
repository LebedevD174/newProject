const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      <div className='navbar'>
        <div className="flex navbar" id="nav-mobile">
          <a href="/" className="logo">
            Главная
          </a>
          <a href="/products">Продукты</a>
          <a href="/products">Категории</a>
          {user ? (
            <div className="flex">
              <a href="/orders">Заказы</a>
              <a href="/add-product">Добавить продукт</a>
              <div className="userName">
                Привет,
                {' '}
                {user.name}
                !
              </div>
              <a href="/logout">Выйти</a>
              <a href="/user">
                {user}
              </a>
            </div>
          ) : (
            <div className="flex">
              <div className="select hidden">
                <a href="/auth/sign-up">Регистрация</a>
              </div>
              <div className="select hidden">
                <a href="/auth/sign-in">Войти</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
