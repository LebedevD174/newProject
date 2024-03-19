const React = require('react');
const Layout = require('../Layout');
const Prod = require('../ui/Product');

module.exports = function ProductsPage({ title, products, user }) {
  return (

      
      <Layout title={title} user={user}>
        <h1>{title}</h1>
        <div className="prod_cont flex">
          {products.map((el) => (
            <div className="pd flex column" key={(el.id)}>
              <Prod product={el} />
            </div>
          ))}
        </div>
        
      </Layout>

  );
};
