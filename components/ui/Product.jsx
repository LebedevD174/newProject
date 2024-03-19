const React = require('react');

module.exports = function Navbar({ product, user }) {
  return (
    <>
      <div className='flex column'>
        <div>Продукт</div>
        <div>{product.name}</div>
      </div>
      <div>{`Цена ${product.price} руб.`}</div>
      <a className="btn" href={`/products/product${product.id}`}>Подробнее</a>
      {user && <button className="btn">Добавить в корзину</button>}
    </>
  );
};
