const React = require('react');
const Layout = require('../Layout');

module.exports = function ProdPage({
  title, product, category, user,
}) {
  return (
    <Layout title={title} user={user}>
      <h1>{title}</h1>
      <div className="flex">
        <div className="prod_card flex column">
          <div>
            Название продукта
            {' '}
            {product.name}
          </div>
          <div>
            Цена:
            {product.price}
            {' '}
            руб.
          </div>
          <div>
            Категория:
            {category.name}
          </div>
        </div>
      </div>
    </Layout>

  );
};
